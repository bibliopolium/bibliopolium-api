import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { TimeStamped } from "./TimeStamped";

export enum UserRole {
  ADMIN = "admin",
  LIBRARIAN = "librarian",
  STUDENT = "student",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({ type: "enum", enum: UserRole })
  role: UserRole;

  @Column(() => TimeStamped)
  timeStamped: TimeStamped;
}

@Entity()
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({
    unique: true,
  })
  enrollment: string;
}
