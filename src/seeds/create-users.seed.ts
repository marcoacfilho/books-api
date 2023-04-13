import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { User } from "../entity/User";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)().createMany(10)
  }
}