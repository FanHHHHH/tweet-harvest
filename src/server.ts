// Import the framework and instantiate it
import Fastify from 'fastify'
import { registerController } from './server/controller'
import { MYSQL_DB, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } from './env'
import { Pool, createPool } from 'mysql2/promise'
import fastifyCron from 'fastify-cron'
import { MOD } from './server/controller/crawl'


// 创建 MySQL 连接池
export const pool: Pool = createPool({
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    host:MYSQL_HOST,
    port: Number(MYSQL_PORT),
    database: MYSQL_DB
});

export const server = Fastify({
  logger: true
})


const main = async () => {
    registerController()

    server.register(
        fastifyCron,
        {
          jobs: [
            {
              cronTime: '53 18 * * *', // Everyday at 18:53pm
              onTick: async server => {
                try {
                  const response = await server.inject(`${MOD}/start`)
                  console.log(response.json())
                } catch (err) { console.error(err) }
              }
            }
          ]
        }
      )

    // Run the server!
    try {
        await server.listen({ host: '0.0.0.0', port: 25154 })
        // 11
        server.cron.startAllJobs()
       
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

main()

