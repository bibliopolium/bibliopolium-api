import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { User } from "@entities/entity/User";

import { AppDataSource } from "@data-source";
import { Repository } from "typeorm";

export class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  constructor() {
    console.log(AppDataSource);
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }
}
