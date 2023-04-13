import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1681361285867 implements MigrationInterface {
    name = 'initial1681361285867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books_checked" ADD "returnDate" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books_checked" DROP COLUMN "returnDate"`);
    }

}
