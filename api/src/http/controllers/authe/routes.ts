import { FastifyInstance } from 'fastify'
import { usuarioAuthe } from './authe_user'
import { verifyJWT } from '../../middlewares/verify-jwt'

export async function usuarioautheRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)
  app.post('/teste', usuarioAuthe)
}