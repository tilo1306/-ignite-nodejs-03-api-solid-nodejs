import { PrismaGymsRepository } from '@/repositories/prisma/prismaGymsRepository'
import { CheckInUseCase } from '../check-in'
import { PrismaCheckInRepository } from '@/repositories/prisma/prismaCheckInRepository'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInRepository()
  const gymsRepository = new PrismaGymsRepository()

  const useCase = new CheckInUseCase(checkInsRepository, gymsRepository)

  return useCase
}
