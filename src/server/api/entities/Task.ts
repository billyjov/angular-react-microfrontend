import {
    Column,
    CreateDateColumn,
    Entity, PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        default: false,
    })
    done: boolean;

    @Column()
    dueDate: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    columns: {
        updatedAt: {
            updateDate: true,
        },
    };
}
