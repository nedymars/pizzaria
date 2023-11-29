import knex from 'knex';
import { config } from "dotenv";
config()

const connectDb = knex({
    client: 'pg',
    connection: {
      host: process.env.pghost,
      user: process.env.pguser,
      password: process.env.pgpwd,
      database: process.env.pgdatabase,
    },
    pool: {
      min: 1,
      max: 10,
    },
  });

  export default connectDb;