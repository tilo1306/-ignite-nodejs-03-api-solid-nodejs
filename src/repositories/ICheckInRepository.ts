import { CheckIn, Prisma } from '@prisma/client'

export interface ICheckInsRepository {
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findByUserIdOnDate(userId: string, data: Date): Promise<CheckIn | null>
}
