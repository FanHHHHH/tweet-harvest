// Import the framework and instantiate it
import Fastify from 'fastify'
import { registerController } from './server/controller'

export const server = Fastify({
  logger: true
})

// Declare a route
server.get('/api/crawl', async function handler (request, reply) {
  return { hello: 'world' }
})



const main = async () => {
    registerController()
    // Run the server!
    try {
        await server.listen({ port: 25154 })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

main()

