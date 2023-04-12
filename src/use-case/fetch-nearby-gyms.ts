/* eslint-disable no-useless-constructor */

import { Gym } from '@prisma/client'
import { IGymsRepository } from '@/repositories/IGymsRepository'

interface IFetchNearbyGymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface IFetchNearbyGymsUseCaseResponse {
  gyms: Gym[]
}

export class FetchNearbyGymsUseCase {
  constructor(private gymsRepository: IGymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: IFetchNearbyGymsUseCaseRequest): Promise<IFetchNearbyGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return {
      gyms,
    }
  }
}
