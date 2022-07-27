import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

class CustomHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return `${payload}-custom-hash`;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export default CustomHashProvider;
