import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {Order} from "./order";
import {ProductType} from "./product-type";

@Entity()
export class OrderSpecification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    quantity: number;

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
