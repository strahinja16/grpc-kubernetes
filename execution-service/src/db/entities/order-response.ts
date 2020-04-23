import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {Order, State} from "./order";

@Entity()
export class OrderResponse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column({ nullable: true})
    endDate: Date;

    @Column('int')
    state: State;

    @Column({ type: "int" })
    orderId: number;

    @ManyToOne(type => Order, order => order.orderResponses)
    @JoinColumn({ name: "orderId" })
    order: Order;
}
