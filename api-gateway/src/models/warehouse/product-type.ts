import {IPersonnelCredentials} from "../shared/personnel-credentials";
import {IAddMaterialSpecificationDto, IMaterialSpecification} from "./material-specification";

export interface IProductType {
    id: number;
    name: string;
    price: number;
}

export interface InputAddProductTypeAndMaterialSpecifications {
    personnelCredentials: IPersonnelCredentials;
    productType: IAddProductTypeDto;
    materialSpecs: IAddMaterialSpecificationDto[];
}

export interface ProductTypeAndMaterialSpecifications {
    productType: IProductType;
    materialSpecs: IMaterialSpecification[];
}

export interface IAddProductTypeDto {
    name: string;
    price: number;
}

export const typeDef = `
  type ProductType {
    id: Int!
    name: String!
    price: Int!
  }
  
  type ProductTypeAndMaterialSpecifications {
    productType: ProductType!
    materialSpecs: [MaterialSpecification!]!
  }
  
  input InputAddProductTypeAndMaterialSpecifications {
    productType: InputAddProductTypeDto!
    materialSpecs: [InputAddMaterialSpecificationDto!]!
    personnelCredentials: PersonnelCredentials!
  }
  
  input InputAddProductTypeDto {
    name: String!
    price: Int!
  }
`;
