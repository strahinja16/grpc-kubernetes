import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {OrderResponse} from "./order-response";

export enum State  {
    started,
    paused,
    finished
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    serial: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column('int')
    state: State;

    @Column()
    personnelId: string;

    @OneToMany(type => OrderResponse, orderResponse => orderResponse.order)
    orderResponses: OrderResponse[];
}
