import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
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
    serial: string;

    @Column("int", { nullable: true })
    materialTypeId: number;

    @ManyToOne(type => MaterialType)
    @JoinColumn({ name: "materialTypeId" })
    materialType: MaterialType;

    @Column("int", { nullable: true })
    warehouseId: number;

    @ManyToOne(type => Warehouse, warehouse => warehouse.materialItems)
    @JoinColumn({ name: "warehouseId" })
    warehouse: Warehouse;

    @Column({ nullable: true })
    orderSerial: string;

    @Column('enum', { enum: MaterialState })
    materialState: MaterialState;
}
