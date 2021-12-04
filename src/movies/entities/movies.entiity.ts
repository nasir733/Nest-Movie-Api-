import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Movies {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}