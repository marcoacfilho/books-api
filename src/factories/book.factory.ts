import { Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Book } from '../entity/Book';

define(Book, (faker: Faker) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const title = faker.random.words();

  const book = new Book();
  book.title = title;
  book.author = `${firstName} ${lastName}`;
  book.isCheckoutOut = false;
  return book;
});
