import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        AUTH_URL: z.url(),
    },
    // this is example
    // client: { },
    runtimeEnv: {
        AUTH_URL: process.env.AUTH_URL,
    }
})