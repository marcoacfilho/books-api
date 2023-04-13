import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BooksChecked {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  bookIdentificationNumber: string;

  @Column()
  userId: string;

  @Column()
  status: string;

  @Column()
  checkoutDate: string;

  @Column({
    nullable: true
  })
  returnDate: string;
}
