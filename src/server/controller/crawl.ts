import { pool, server } from "../../server"

export const MOD = "/api/crawl"

export const registerCrawl = () => {
    server.get(`${MOD}/start`, async (req, res) => {

        const connection = await pool.getConnection()
        const [ret] = await connection.query('SELECT  count(*) FROM tweets')
        console.log("result", ret[0][0]['count(*)'])

        return  {
            hello: 'world' + ret
        }
     })    
}

