
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })
  const { email, password } = authenticateBodySchema.parse(request.body)
  console.log(email, password)
  try {

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: "kkhgasfdj",
        },
      }
    )

    const refreshToken = await reply.jwtSign(
      {},
      {
        sign: {
          sub: "jhedkuf",
          expiresIn: '7d', // se o usuario ficar 7 dias fora o usuario fica deslogado
        },
      }
    )

    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: false, // criptografado via https
        sameSite: 'none', // nao acesivel a outros sites
        httpOnly: false, // so pode ser acessado pelo beckend
      })
      .status(200)
      .send({
        token,
      })
  } catch (err) {
    throw err
  }
}
