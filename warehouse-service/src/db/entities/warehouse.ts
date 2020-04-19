import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {MaterialItem} from "./material-item";

@Entity()
export class Warehouse {
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
    capacity: number;

    @OneToMany(type => MaterialItem, materialItem => materialItem.warehouse)
    materialItems: MaterialItem[];
}
