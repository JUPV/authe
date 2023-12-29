
import { FastifyRequest, FastifyReply } from 'fastify'

export async function usuarioAuthe(
  request: FastifyRequest,
  reply: FastifyReply
) {
  
  reply.status(200).send("teste56958")
 
}
