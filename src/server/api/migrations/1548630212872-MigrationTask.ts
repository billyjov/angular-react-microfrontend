import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class MigrationTask1548630212872 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'task',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                }, {
                    name: 'title',
                    type: 'varchar',
                }, {
                    name: 'done',
                    type: 'boolean',
                }, {
                    name: 'dueDate',
                    type: 'datetime',
                }, {
                    name: 'createdAt',
                    type: 'datetime',
                }, {
                    name: 'updatedAt',
                    type: 'datetime',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        console.log(queryRunner);
    }

}
