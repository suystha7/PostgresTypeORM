import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Course } from "./course.entity";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  fatherName: string;

  @ManyToMany(() => Course, { cascade: true, eager: true, onDelete: "CASCADE" })
  @JoinTable()
  courses: Course[];
}
