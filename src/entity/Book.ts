import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimeStamped } from "./TimeStamped";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullTitle: string;

  @Column()
  numberOfPages: number;

  @Column()
  publishDate: string;

  @Column("simple-array")
  authors: string[];

  @Column()
  localization: string;

  @Column({
    unique: true,
  })
  isbn: string;

  @Column()
  rentedCount: string;

  @Column()
  quantity: number;

  @Column({
    nullable: true,
  })
  imageUrl: string;

  @Column(() => TimeStamped)
  timeStamped: TimeStamped;
}
