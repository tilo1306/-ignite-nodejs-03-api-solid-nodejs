import { fastify } from 'fastify'
import { usersRoutes } from './routes/useRoutes.routes'

export const app = fastify()

app.register(usersRoutes, { prefix: '/user' })
