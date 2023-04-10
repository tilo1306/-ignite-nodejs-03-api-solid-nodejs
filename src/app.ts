import { fastify } from 'fastify'
import { usersRoutes } from './routes/useRoutes.routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(usersRoutes, { prefix: '/user' })
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation',
      issues: error.format(),
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
