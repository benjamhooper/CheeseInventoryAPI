import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1629551933802 implements MigrationInterface {
  name = 'InitialMigration1629551933802';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "inventory" ("id" SERIAL NOT NULL, "cheeseType" character varying NOT NULL, "stock" integer NOT NULL, CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "inventory"`);
  }
}
