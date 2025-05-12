import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "postgres",
  entities: [path.join(__dirname, "..", "entites/*.entity{.ts,.js}")],
  synchronize: true,
  logging: true,
});
