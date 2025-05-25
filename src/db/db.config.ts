import path from "path";
import { DataSource } from "typeorm";
import {config} from "dotenv";
config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [path.join(__dirname, "..", "entites/*.entity{.ts,.js}")],
  synchronize: true,
  logging: true,
});
