export interface IWarehouseQuantity {
  warehouseId: number;
  count: number;
  materialName: string;
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
