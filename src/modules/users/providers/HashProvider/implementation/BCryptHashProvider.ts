import { IHashProvider } from "../interface/IHashProvider";

import { compare } from "bcryptjs";

export class BCryptHashProvider implements IHashProvider {
  compareHash(password: string, hashed: string): Promise<boolean> {
    return compare(password, hashed);
  }
}
