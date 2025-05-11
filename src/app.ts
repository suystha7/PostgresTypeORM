import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import { User } from "./entites/User";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", async (req, res) => {
  const userRepo = AppDataSource.getRepository(User);

  // find all the records
  // const allRecords = await userRepo.find();
  // res.json(allRecords);

  //delete
  //  await userRepo.delete(2)
  // res.send("Record Deleted");

  // insert
  // let user: User = new User();
  // (user.email = "suyogstha317@gmail.com"),
  //   (user.firstName = "Suyog"),
  //   (user.lastName = "Shrestha");

  // const userInsert = await userRepo.save(user);

  // update
  // await userRepo.update(8, {
  //   firstName: "Sumana",
  //   lastName: "Shakya",
  //   email: "sumanashky@gmail.com",
  // });

  // res.send("Record Updated");

  // filter
  const record = await userRepo.findOne({ where: { firstName: "Sumana" } });

  res.json(record)
});

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
