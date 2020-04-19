import {Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import {ProductType} from "./product-type";
import {MaterialType} from "./material-type";

@Entity()
export class MaterialSpecification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "int",
    })
    quantity: number;

    @ManyToOne(type => ProductType)
    productType: ProductType;

    @ManyToOne(type => MaterialType)
    materialType: MaterialType;
}
