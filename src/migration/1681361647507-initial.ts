import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1681361647507 implements MigrationInterface {
    name = 'initial1681361647507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books_checked" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "books_checked" DROP CONSTRAINT "PK_0e772c3517594c7f04476749c29"`);
        await queryRunner.query(`ALTER TABLE "books_checked" ADD CONSTRAINT "PK_f871b682057a9f7c96a92774935" PRIMARY KEY ("bookIdentificationNumber", "id")`);
        await queryRunner.query(`ALTER TABLE "books_checked" DROP CONSTRAINT "PK_f871b682057a9f7c96a92774935"`);
        await queryRunner.query(`ALTER TABLE "books_checked" ADD CONSTRAINT "PK_873497f09a2b180cf32c1839027" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "books_checked" DROP COLUMN "bookIdentificationNumber"`);
        await queryRunner.query(`ALTER TABLE "books_checked" ADD "bookIdentificationNumber" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books_checked" DROP COLUMN "bookIdentificationNumber"`);
        await queryRunner.query(`ALTER TABLE "books_checked" ADD "bookIdentificationNumber" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "books_checked" DROP CONSTRAINT "PK_873497f09a2b180cf32c1839027"`);
        await queryRunner.query(`ALTER TABLE "books_checked" ADD CONSTRAINT "PK_f871b682057a9f7c96a92774935" PRIMARY KEY ("bookIdentificationNumber", "id")`);
        await queryRunner.query(`ALTER TABLE "books_checked" DROP CONSTRAINT "PK_f871b682057a9f7c96a92774935"`);
        await queryRunner.query(`ALTER TABLE "books_checked" ADD CONSTRAINT "PK_0e772c3517594c7f04476749c29" PRIMARY KEY ("bookIdentificationNumber")`);
        await queryRunner.query(`ALTER TABLE "books_checked" DROP COLUMN "id"`);
    }

}
