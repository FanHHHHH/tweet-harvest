import { logError } from "../../helpers/page.helper"
import { server } from "../../server"
import { crawlService } from "../service/crawl"

export const MOD = "/api/crawl"

export const registerCrawl = () => {

    // start crawl
  server.get(`${MOD}/start`, async (req, res) => {
    const ret = await crawlService()
    return ret
  })    
}

