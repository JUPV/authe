import { FastifyRequest, FastifyReply } from 'fastify'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    console.log('teste 569858', request)
    const teste = await request.jwtVerify()
    console.log(teste)
  } catch (aw) {
    return reply.status(401).send({ message: 'unauthorized3' })
  }
}
