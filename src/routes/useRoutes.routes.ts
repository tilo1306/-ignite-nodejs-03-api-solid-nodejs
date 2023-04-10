import { register } from '@/http/controllers/register'
import { FastifyInstance } from 'fastify'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', register)
}
