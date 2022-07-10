import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class User1657435834925 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
        new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    isPrimary: true,
                    type: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'age',
                    type: 'int'
                },
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('users')
    }

}
