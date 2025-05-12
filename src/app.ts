import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import { User } from "./entites/User";
import { Profile } from "./entites/Profile";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", async (req, res) => {
  const userRepo = AppDataSource.getRepository(User);
  const profileRepo = AppDataSource.getRepository(Profile);

  // find all the records
  // const allRecords = await userRepo.find();
  // res.json(allRecords);

  //delete
  //  await userRepo.delete(2)
  // res.send("Record Deleted");

  await profileRepo.delete(1);
  res.send("profile deleted")



  
  // // insert
  // let profile: Profile = new Profile();
  // (profile.gender = "male"), (profile.photo = "this is the photo");
  // let user: User = new User();
  // (user.email = "suyogstha317@gmail.com"),
  //   (user.firstName = "Suyog"),
  //   (user.lastName = "Shrestha");
  // user.profile = profile;

  // const userInsert = await userRepo.save(user);

  // res.json(userInsert);

  // const userFound = await userRepo.findOne({ where: { id: 12 } });

  // if (userFound) {
  //   (userFound.email = "suyog@gmail.com"),
  //     (userFound.firstName = "Sumana"),
  //     (userFound.lastName = "Shrestha"),
  //     (userFound.profile.gender = "female"),
  //     (userFound.profile.photo = "no photo");

  //   const updatedRecord = await userRepo.save(userFound);
  //   res.json(updatedRecord);
  // } else {
  //   res.send("Record doesn't exists");
  // }

  // update
  // await userRepo.update(8, {
  //   firstName: "Sumana",
  //   lastName: "Shakya",
  //   email: "sumanashky@gmail.com",
  // });

  // res.send("Record Updated");



  // filter
  // const record = await userRepo.findOne({ where: { firstName: "Sumana" } });

  // res.json(record)
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
