export interface booksCheckedInterface {
  id: string;
  bookIdentificationNumber: string;
  userId: string;
  status: string;
  checkoutDate: string;
  returnDate?: string;
}
