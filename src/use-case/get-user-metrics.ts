/* eslint-disable no-useless-constructor */
import { ICheckInsRepository } from '@/repositories/ICheckInRepository'

interface IGetUserMetricsUseCaseRequest {
  userId: string
}

interface IGetUserMetricsUseCaseResponse {
  checkInsCount: number
}

export class GetUserMetricsUseCase {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({
    userId,
  }: IGetUserMetricsUseCaseRequest): Promise<IGetUserMetricsUseCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
