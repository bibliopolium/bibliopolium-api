import { Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class TimeStamped {
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
