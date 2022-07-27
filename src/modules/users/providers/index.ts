import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCryptProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';
import CustomHashProvider from '@modules/users/providers/HashProvider/implementations/CustomHashProvider';

export const providers = {
  bcrypt: BCryptProvider,
  custom: CustomHashProvider,
};

container.registerSingleton<IHashProvider>('HashProvider', providers.bcrypt);
