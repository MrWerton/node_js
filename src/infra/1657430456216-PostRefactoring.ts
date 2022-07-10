import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class PostRefactoring1657430456216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: 'varchar',   
                    },
                    {
                        name: "age",
                        type: 'int',   
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
