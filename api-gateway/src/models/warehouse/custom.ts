import {MaterialStateEnum} from "./material-item";

export interface IMaterialQuantityByNameAndState {
    warehouseId: number;
    quantity: number;
    materialName: string;
    materialState: MaterialStateEnum,
}

export const typeDef = `
    type MaterialQuantityByNameAndState {
        warehouseId: Int!
        quantity: Int!
        materialName: String!
        materialState: Int!
    }
`;
