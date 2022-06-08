import { User } from "@entities/entity/User";
import AppError from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";
import { IHashProvider } from "../providers/HashProvider/interface/IHashProvider";
import { IUsersRepository } from "../repositories/IUsersRepository";

import { auth } from "@config/auth";
import { sign } from "jsonwebtoken";

interface IRequestDTO {
  email: string;
  password: string;
}

interface IResponseDTO {
  user: User;
  token: string;
}

@injectable()
export class AuthenticateUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("IHashProvider")
    private bcryptHashProvider: IHashProvider
  ) {}

  public async execute({
    email,
    password,
  }: IRequestDTO): Promise<IResponseDTO> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Incorrect email/password combination", 500);
    }

    const passwordMatch = await this.bcryptHashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new AppError("Incorrect email/password combination", 500);
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
