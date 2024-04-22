import { config } from "dotenv";
import { parseEnv, z } from "znv";

config();

export const { DEV_ACCESS_TOKEN: ACCESS_TOKEN, HEADLESS_MODE, ENABLE_EXPONENTIAL_BACKOFF, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_HOST, MYSQL_DB } = parseEnv(process.env, {
  DEV_ACCESS_TOKEN: z.string().min(1).optional(),
  HEADLESS_MODE: z.boolean().default(true),
  ENABLE_EXPONENTIAL_BACKOFF: z.boolean().default(false),
  MYSQL_USER: z.string().min(1).optional(),
  MYSQL_PASSWORD: z.string().min(1).optional(),
  MYSQL_HOST: z.string().min(1).optional(),
  MYSQL_PORT: z.string().min(1).optional(),
  MYSQL_DB: z.string().min(1).optional(),
});
