import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum Role  {
    operator,
    manager,
    admin,
}

@Entity()
export class Personnel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    serial: string;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column('enum', { enum: Role })
    role: Role;
}
