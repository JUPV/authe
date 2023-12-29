import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastiCookie from '@fastify/cookie'
import { usuariosRoutes } from './http/controllers/usuarios/routes'
import { env } from './env'
import cors from '@fastify/cors'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})


app.register(cors, {
  origin: true,
})

app.register(fastiCookie)

app.register(usuariosRoutes)

app.setErrorHandler((error, _, reply) => {
  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // enviar o erro para um apricativo de alerta ex: DataDog/NewRelic/Sentry
  }
  return reply.status(500).send({ message: 'Internal server error.' })
})
