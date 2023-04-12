import { authenticate } from '@/http/controllers/authenticate'
import { profile } from '@/http/controllers/profile'
import { register } from '@/http/controllers/register'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', register)
  app.post('/session', authenticate)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
