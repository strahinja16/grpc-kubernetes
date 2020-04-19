import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MaterialType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;
}
