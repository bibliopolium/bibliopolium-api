import { DataSource } from "typeorm";
import { User } from "./entities/entity/User";
import "dotenv/config";

console.log(__dirname);
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
  subscribers: [],
});
