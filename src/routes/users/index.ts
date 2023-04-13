import { RouteInterface } from '../';
import { UserController } from '../../controller/UserController';

interface UserRoutesInterface extends RouteInterface {
  controller: typeof UserController;
}

export const UserRoutes: UserRoutesInterface[] = [
  {
    method: 'get',
    route: '/users',
    controller: UserController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/users/:id',
    controller: UserController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/users',
    controller: UserController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/users/:id',
    controller: UserController,
    action: 'remove',
  },
];
