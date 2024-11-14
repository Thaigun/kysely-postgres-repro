import { Kysely } from 'kysely';
import { PostgresJSDialect } from 'kysely-postgres-js';
import postgres from 'postgres';

const databaseConfig = {
    database: 'postgres',
    username: 'postgres',
    password: 'psw',
    host: '127.0.0.1',
    port: 5432,
    max: 10,
};

const postgresDriver = postgres(databaseConfig);

export const db = new Kysely<{}>({
    dialect: new PostgresJSDialect({
        postgres: postgresDriver,
    }),
});
