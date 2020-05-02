import { StateEnum } from "./order";

export interface IOrderResponse {
  id: number;
  startDate: Date;
  endDate: Date | null;
  state: StateEnum;
  orderId: number;
}

export const typeDef = `
    type OrderResponse {
        id: Int!
        orderId: Int!
        startDate: String!
        endDate: String!
        state: Int!
    }
    
    input InputGetOrderResponses {
        orderId: Int!
    } 
`;
