import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env}`;

dotenv.config({
  path: envFile
});

export const config = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL
}