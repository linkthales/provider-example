import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '@modules/users/infra/http/controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get(
  '/hash',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      provider: Joi.string(),
    },
  }),
  usersController.hash,
);

export default usersRouter;
