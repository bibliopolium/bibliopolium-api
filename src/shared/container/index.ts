import { container } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";

import { IHashProvider } from "@modules/users/providers/HashProvider/interface/IHashProvider";
import { BCryptHashProvider } from "@modules/users/providers/HashProvider/implementation/BCryptHashProvider";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IHashProvider>("IHashProvider", BCryptHashProvider);
