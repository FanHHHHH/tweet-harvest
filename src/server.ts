// Import the framework and instantiate it
import Fastify from 'fastify'
import { registerController } from './server/controller'
import { MYSQL_DB, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } from './env'
import { Pool, createPool } from 'mysql2/promise'

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
    // Run the server!
    try {
        await server.listen({ port: 25154 })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

main()

