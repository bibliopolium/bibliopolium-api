import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Student } from "./User";
import { Book } from "./Book";

@Entity()
export class Rent {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Student)
  @JoinColumn()
  student: Student;

  @ManyToMany(() => Book)
  @JoinTable()
  books: Book[];

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
