import type { Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { User } from '../entity/User';

define(User, (faker: Faker) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const libraryCardNumber = faker.random.number();

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.libraryCardNumber = libraryCardNumber;
  user.isSuspended = false;
  return user;
});
