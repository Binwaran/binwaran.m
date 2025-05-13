// utils/db.mjs
import * as pg from "pg";
const { Pool } = pg.default;

const connectionPool = new Pool({
  connectionString:
    "postgresql://your-db-username:your-db-password@localhost:5432/your-db-name",
});

export default connectionPool;

