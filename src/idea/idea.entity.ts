import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class IdeaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column('text')
    idea: string;

    @Column('text')
    description: string;
}