/* eslint-disable no-useless-constructor */

import { Gym } from '@prisma/client'
import { IGymsRepository } from '@/repositories/IGymsRepository'

interface CreateGymUseCaseRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface CreateGymUseCaseResponse {
  gym: Gym
}

export class CreateGymUseCase {
  constructor(private gymsRepository: IGymsRepository) {}

  async execute({
    description,
    latitude,
    phone,
    title,
    longitude,
  }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
    const gym = await this.gymsRepository.create({
      description,
      latitude,
      phone,
      title,
      longitude,
    })

    return {
      gym,
    }
  }
}
