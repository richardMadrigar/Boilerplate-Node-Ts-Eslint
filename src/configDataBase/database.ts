// configuraçao do banco de dados
import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'teste123',
  database: 'typescriptdatabase',
  port: 5432,
});
