import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { userInterface } from '../interface/User';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  libraryCardNumber: number;

  @Column({
    default: false
  })
  isSuspended: boolean;

  public static mockTestUser(): userInterface {
    const user: User = new User();
    user.firstName = 'Marco';
    user.lastName = 'Carvalho';
    user.libraryCardNumber = 123;
    user.isSuspended = false;
    return user;
  }
}
