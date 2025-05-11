import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";

const app = express();
app.use(express.json());

const port = 3000;

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "postgres",
  entities: ["src/entites/*{.ts,.js}"],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Running in port ${port}`);
    });
  })
  .catch((err) => console.log("Error Connecting database", err));

app.get("/", (req, res) => {
  res.send("Hello Suyog");
});
