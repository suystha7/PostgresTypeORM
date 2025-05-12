import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./db/db.config";
import { Student } from "./entites/student.entity";
import { Course } from "./entites/course.entity";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", async (req, res) => {
  const studentRepo = AppDataSource.getRepository(Student);
  const courseRepo = AppDataSource.getRepository(Course);

  // const studentFound = await studentRepo.find();
  // res.json(studentFound);

  // await studentRepo.delete(2);
  await courseRepo.delete(2);
  res.send("Deleted")
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Running in port ${port}`);
    });
  })
  .catch((err) => console.log("Error Connecting database", err));

// insert
// let products: Product[] = [];

// let iphone = new Product();
// iphone.name = "Iphone";
// iphone.description = "Smart Phone";
// iphone.price = 250000;

// let ipad = new Product();
// ipad.name = "Ipad";
// ipad.description = "Tablet";
// ipad.price = 150000;

// let macbook = new Product();
// macbook.name = "MacBook";
// macbook.description = "Laptop";
// macbook.price = 400000;

// products.push(iphone, ipad, macbook);

// let company: Company = new Company();
// (company.name = "Apple"),
//   (company.description = "Tech Company California"),
//   (company.products = products);

// const data = await companyRepo.save(company);

// res.json(data);

//  let course = new Course();
//   course.courseCode = 101;
//   course.name = "C++";
//   course.description = "This is OOP programming";

//   let course1 = new Course();
//   course1.courseCode = 102;
//   course1.name = "C";
//   course1.description = "This is C programming";

//   let student = new Student();
//   student.name = "Sumana";
//   (student.age = 20), (student.fatherName = "Shiva");
//   student.courses = [course, course1];

//   await studentRepo.save(student);
//   res.send("Student added");

// find
// const companyFound = await companyRepo.find({
//     relations: {
//       products: true,
//     },
//     where: {
//       products: {
//         price: LessThan(300000),
//       },
//     },
//   });

// update
// const company = await companyRepo.findOne({ where: { id: 2 } });

//   if (company != undefined) {
//     (company.name = "Samsung"), (company.description = "Samsung Company Korea");
//     for (let x = 0; x < company.products.length; x++) {
//       company.products[x].price = 10;
//     }

//     const update = await companyRepo.save(company);
//     res.json(update);
//   } else {
//     res.json("Company doesn't exists");
//   }
