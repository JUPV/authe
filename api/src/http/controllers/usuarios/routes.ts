import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate.ts'

export async function usuariosRoutes(app: FastifyInstance) {
  app.post('/sessions', authenticate)
}
