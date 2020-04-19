import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, Generated, OneToMany} from "typeorm";
import { MaterialType } from "./material-type";
import {Warehouse} from "./warehouse";

export enum MaterialState  {
    available,
    taken,
    usedUp,
}

@Entity()
export class MaterialItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    serial: string;

    @ManyToOne(type => MaterialType)
    materialType: MaterialType;

    @ManyToOne(type => Warehouse, warehouse => warehouse.materialItems)
    warehouse: Warehouse;

    @Column()
    orderSerial: string;

    @Column('enum', { enum: MaterialState })
    materialState: MaterialState;
}
