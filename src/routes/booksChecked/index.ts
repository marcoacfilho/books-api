import { RouteInterface } from '..';
import { BooksCheckedController } from '../../controller/BooksCheckedController';

interface BooksCheckedRoutesInterface extends RouteInterface {
  controller: typeof BooksCheckedController;
}

export const BooksCheckedRoutes: BooksCheckedRoutesInterface[] = [
  {
    method: 'get',
    route: '/user-checkouts/:userId',
    controller: BooksCheckedController,
    action: 'userCheckouts',
  },
  {
    method: 'get',
    route: '/book-status/:id',
    controller: BooksCheckedController,
    action: 'bookStatus',
  },
  {
    method: 'post',
    route: '/checkout/:userId/:bookIdentificationNumber',
    controller: BooksCheckedController,
    action: 'checkout',
  },
  {
    method: 'post',
    route: '/return-book/:userId/:bookIdentificationNumber',
    controller: BooksCheckedController,
    action: 'returnBook',
  },
];
