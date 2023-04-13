import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Book } from "../entity/Book";

export default class CreateBooks implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Book)().createMany(10)
  }
}