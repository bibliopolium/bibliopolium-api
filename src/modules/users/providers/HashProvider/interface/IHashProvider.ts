export interface IHashProvider {
  compareHash(password: string, hashed: string): Promise<boolean>;
}
