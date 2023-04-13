import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { BooksChecked } from '../entity/BooksChecked';
import { Book } from '../entity/Book';
import { NotFoundError } from '../common/errorValidation/errors';

export class BooksCheckedController {
  private booksCheckedRepository = getRepository(BooksChecked);
  private bookRepository = getRepository(Book);

  async checkout(request: Request) {
    try {
      const bookToCheckOut = await this.bookRepository.findOne({
        where: [{ bookIdentificationNumber: request.params.bookIdentificationNumber }],
      });

      if (bookToCheckOut && !bookToCheckOut.isCheckoutOut) {
        const data = await this.bookRepository
          .createQueryBuilder()
          .update(Book)
          .set({ isCheckoutOut: true })
          .where('bookIdentificationNumber = :bookIdentificationNumber', {
            bookIdentificationNumber: request.params.bookIdentificationNumber,
          })
          .execute();
        if (data.affected === 1) {
          const bookChecked = new BooksChecked();
          bookChecked.userId = request.params.userId;
          bookChecked.bookIdentificationNumber = request.params.bookIdentificationNumber;
          bookChecked.status = 'checked-out';
          bookChecked.checkoutDate = new Date().toISOString();

          return this.booksCheckedRepository.save(bookChecked);
        } else {
          throw new NotFoundError();
        }
      } else {
        return {
          error: 'Sorry, this book is not currently available for check out.',
        };
      }
    } catch (err) {
      throw err;
    }
  }

  async returnBook(request: Request) {
    try {
      const bookToReturn = await this.bookRepository.findOne({
        where: [{ bookIdentificationNumber: request.params.bookIdentificationNumber }],
      });

      if (bookToReturn && bookToReturn.isCheckoutOut) {
        const data = await this.bookRepository
          .createQueryBuilder()
          .update(Book)
          .set({ isCheckoutOut: false })
          .where('bookIdentificationNumber = :bookIdentificationNumber', {
            bookIdentificationNumber: request.params.bookIdentificationNumber,
          })
          .execute();
        if (data.affected === 1) {
          const returned = await this.bookRepository
            .createQueryBuilder()
            .update(BooksChecked)
            .set({ status: 'returned', returnDate: new Date().toISOString() })
            .where('bookIdentificationNumber = :bookIdentificationNumber', {
              bookIdentificationNumber: request.params.bookIdentificationNumber,
            })
            .andWhere('userId = :userId', { userId: request.params.userId })
            .andWhere('status = :status', { status: 'checked-out' })
            .execute();
          if (returned.affected === 1) {
            return 'Book successfully returned.';
          }
        } else {
          throw new NotFoundError();
        }
      } else {
        return {
          error: "Sorry, this book is not checked out, therefore, it can't be returned",
        };
      }
    } catch (err) {
      throw err;
    }
  }

  async bookStatus(request: Request) {
    try {
      const bookStatusCheck = await this.bookRepository.findOne(request.params.id);

      return {
        bookIdentificationNumber: bookStatusCheck.bookIdentificationNumber,
        status: bookStatusCheck.isCheckoutOut ? 'unavailable' : 'available',
      };
    } catch (err) {
      throw err;
    }
  }

  async userCheckouts(request: Request) {
    try {
      return this.booksCheckedRepository.find({
        where: [{ userId: request.params.userId }],
      });
    } catch (err) {
      throw err;
    }
  }
}
