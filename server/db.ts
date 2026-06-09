import { Pool } from "pg";
import { serverEnv } from "./config";

export const db = new Pool({
  connectionString: serverEnv.DATABASE_URL,
});

db.on("error", (error) => {
  console.error("[db] Unexpected PostgreSQL pool error", error);
});
