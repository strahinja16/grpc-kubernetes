import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
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

    @Column("int", { nullable: true })
    productTypeId: number;

    @ManyToOne(type => ProductType)
    @JoinColumn({ name: "productTypeId" })
    productType: ProductType;

    @Column("int", { nullable: true })
    materialTypeId: number;

    @ManyToOne(type => MaterialType)
    @JoinColumn({ name: "materialTypeId" })
    materialType: MaterialType;
}
