import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUsersService } from "@modules/users/services/AuthenticateUsersService";

// import { UsersRepository } from "../../typeorm/repositories/UsersRepository";
// import { BCryptHashProvider } from "@modules/users/providers/HashProvider/implementation/BCryptHashProvider";

export class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    // const usersRepository = new UsersRepository();
    // const hashProvider = new BCryptHashProvider();
    // const authenticateUser = new AuthenticateUserService(
    //   usersRepository,
    //   hashProvider
    // );

    const authenticateUser = container.resolve(AuthenticateUsersService);

    const { user, token } = await authenticateUser.execute({ email, password });

    return res.json({ user, token });
  }
}
