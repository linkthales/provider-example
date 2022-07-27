import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

import { providers } from '@modules/users/providers';

export default class UsersController {
  public async hash(request: Request, response: Response): Promise<Response> {
    try {
      const { name, provider } = request.body;

      const hashProvider = providers[provider] || providers.bcrypt;

      container.registerSingleton('HashProvider', hashProvider);

      const createUser = container.resolve(AuthenticateUserService);

      const user = await createUser.hash({
        name,
      });

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
