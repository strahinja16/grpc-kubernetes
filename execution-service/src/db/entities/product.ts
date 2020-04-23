import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {Order} from "./order";
import {ProductType} from "./product-type";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    serial: string;

    @Column({ type: "int" })
    orderId: number;

    @ManyToOne(type => Order)
    @JoinColumn({ name: "orderId" })
    order: Order;

    @Column({ type: "int" })
    productTypeId: number;

    @ManyToOne(type => ProductType)
    @JoinColumn({ name: "productTypeId" })
    productType: ProductType;
}
