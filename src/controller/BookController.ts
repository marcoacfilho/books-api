import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Book } from '../entity/Book';
import { NotFoundError } from '../common/errorValidation/errors';

export class BookController {
  private bookRepository = getRepository(Book);
  async all() {
    return this.bookRepository.find();
  }

  async one(request: Request) {
    return this.bookRepository.findOne(request.params.id);
  }

  async save(request: Request) {
    try {
      return this.bookRepository.save(request.body);
    } catch (err) {
      throw err;
    }
  }

  async remove(request: Request, response: Response) {
    try {
      const data = await this.bookRepository
        .createQueryBuilder()
        .delete()
        .from(Book)
        .where('bookIdentificationNumber = :bookIdentificationNumber', { bookIdentificationNumber: request.params.bookIdentificationNumber })
        .execute();
      if (data.affected === 1) {
        return 'record successfully deleted';
      } else {
        throw new NotFoundError();
      }
    } catch (err) {
      throw err;
    }
  }
}
