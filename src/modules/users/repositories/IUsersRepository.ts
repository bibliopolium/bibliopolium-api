import { User } from "@entities/entity/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
}
