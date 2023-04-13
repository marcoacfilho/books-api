import { RouteInterface } from '..';
import { BookController } from '../../controller/BookController';

interface BookRoutesInterface extends RouteInterface {
  controller: typeof BookController;
}

export const BookRoutes: BookRoutesInterface[] = [
  {
    method: 'get',
    route: '/books',
    controller: BookController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/books/:id',
    controller: BookController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/books',
    controller: BookController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/books/:bookIdentificationNumber',
    controller: BookController,
    action: 'remove',
  },
];
