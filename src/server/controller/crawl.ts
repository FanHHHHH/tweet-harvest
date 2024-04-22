import { server } from "../../server"

export const MOD = "/api/crawl"

export const registerCrawl = () => {
    server.get(`${MOD}/start`, async (req, res) => {
        return  {
            hello: 'world'
        }
     })    
}

