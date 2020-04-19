import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        unique: true,
    })
    name: string;

    @Column({
        type: "int",
    })
    price: number;
}
