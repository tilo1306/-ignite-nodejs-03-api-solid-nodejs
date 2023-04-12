/* eslint-disable no-useless-constructor */

import { CheckIn } from '@prisma/client'
import { ICheckInsRepository } from '@/repositories/ICheckInRepository'

interface IFetchUserCheckInsHistoryUseCaseRequest {
  userId: string
  page: number
}

interface IFetchUserCheckInsHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInsHistoryUseCase {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({
    userId,
    page,
  }: IFetchUserCheckInsHistoryUseCaseRequest): Promise<IFetchUserCheckInsHistoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
