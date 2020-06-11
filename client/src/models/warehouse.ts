
export interface IWarehouseQuantity {
  warehouseId: number;
  count: number;
  materialName: string;
  __typename?: string;
}

export interface IWarehouse {
  id: number;
  name: string;
  capacity: number;
}

export interface IMaterialType {
  id: number;
  name: string;
}

export interface IProductType {
  id: number;
  name: string;
  price: number;
}

export interface IWarehouseContent {
  warehouses: IWarehouse[];
  materialTypes: IMaterialType[];
  productTypes: IProductType[];
  warehouseQuantities: IWarehouseQuantity[];
}

export interface IMaterialItem {
  id: number;
  serial: string;
  materialTypeId: number;
  warehouseId: number;
  orderSerial: string;
  materialState: IMaterialState
}


export enum IMaterialState {
  available,
  taken,
  usedUp,
}


