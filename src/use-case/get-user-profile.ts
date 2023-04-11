/* eslint-disable no-useless-constructor */
import { IUsersRepository } from '@/repositories/IUsersRepository'
import { User } from '@prisma/client'
import { ResourceNotFountError } from './errors/resource-not-found-error'

interface IGetUserProfileUseCaseRequest {
  userId: string
}

interface IGetUserProfileUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    userId,
  }: IGetUserProfileUseCaseRequest): Promise<IGetUserProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFountError()
    }

    return {
      user,
    }
  }
}
