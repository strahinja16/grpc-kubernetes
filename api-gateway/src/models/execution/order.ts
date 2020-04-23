import { IOrderSpecificationDto } from "./order-specification";

export enum StateEnum  {
    started,
    paused,
    finished,
}

export interface IOrder {
    id: number;
    serial: string;
    startDate: Date;
    endDate: Date;
    state: StateEnum;
    personnelId: string;
}

export enum OrderTimespanEnum {
    currentWeek = 0,
    lastWeek = 1,
    allUpcoming = 2,
}

export interface IGetOrdersDto {
    timespan: OrderTimespanEnum;
    state?: StateEnum;
}

export interface IPlaceOrderDto {
    endDate: Date;
    personnelId: string;
    orderSpecs: IOrderSpecificationDto[];
}

export interface IChangeOrderStateDto {
    orderId: number;
    state: StateEnum;
}

export interface IFinishOrderDto {
    orderId: number;
}

export const typeDef = `
    type Order {
        id: Int!
        serial: String!
        startDate: String!
        endDate: String!
        state: Int!
        personnelId: String!
    }
    
    input InputGetOrdersDto {
        timespan: Int!
        state: Int
    } 
    
    input InputPlaceOrderDto {
        endDate: Date!
        personnelId: String!
        orderSpecs: [InputOrderSpecificationDto!]!
    }      
    
    input InputChangeOrderStateDto {
        orderId: Int!
        state: Int!
    }
    
    input InputFinishOrderDto {
        orderId: Int!
    }
`;
