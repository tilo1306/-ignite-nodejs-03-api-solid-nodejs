import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send('cheguei aqui')
  })
}
