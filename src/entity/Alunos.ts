import { Column, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alunos {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    age: string;
    @Column({
        default: false
    })
    finished: boolean;
    @CreateDateColumn()
    create_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}