import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { bookInterface } from '../interface/Book';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookIdentificationNumber: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  isCheckoutOut: boolean;

  public static mockTestBook(): bookInterface {
    const book: Book = new Book();
    book.title = 'Dom Casmurro';
    book.author = 'Machado de Assis';
    book.isCheckoutOut = false;
    return book;
  }
}
