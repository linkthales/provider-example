import { injectable, inject } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface IRequestHash {
  name: string;
}

interface IResponseHash {
  hash: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async hash({ name }: IRequestHash): Promise<IResponseHash> {
    const hash = await this.hashProvider.generateHash(name);

    return { hash };
  }
}

export default AuthenticateUserService;
