import { BookRoutes } from './books';
import { BooksCheckedRoutes } from './booksChecked';
import { UserRoutes } from './users';

export interface RouteInterface {
  method: string;
  route: string;
  action: string;
}
export const Routes = [...UserRoutes, ...BookRoutes, ...BooksCheckedRoutes];
