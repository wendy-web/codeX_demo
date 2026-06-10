import { Pool } from "pg";

declare global {
  var postgresPool: Pool | undefined;
}

function getDatabaseUrl() {
  const databaseUrl = process.env.POSTGRES_SESSION_POOL_URL;

  if (!databaseUrl) {
    throw new Error("POSTGRES_SESSION_POOL_URL is not configured.");
  }

  return databaseUrl;
}

export function getPostgresPool() {
  if (!globalThis.postgresPool) {
    globalThis.postgresPool = new Pool({
      connectionString: getDatabaseUrl(),
      ssl: {
        rejectUnauthorized: false,
      },
      max: 5,
    });
  }

  return globalThis.postgresPool;
}
