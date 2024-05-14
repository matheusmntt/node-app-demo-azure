import fastify from "fastify";

export const app = fastify()

app.get('/', (_, reply) => {
  return reply.status(200).send({ message: 'Deu certo!' })
})

app.get('/me', (_, reply) => {
  return reply.status(200).send({ name: 'Matheus', age: 23, project: 'Azure web app nodejs' })
})