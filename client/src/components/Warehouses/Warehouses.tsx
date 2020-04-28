
import React, {FC, Fragment} from 'react';
import Warehouse from "../Warehouse/Warehouse";
import {IWarehouse, IWarehouseQuantity} from "../../models/warehouse";

export interface WarehousesProps {
  warehouses: IWarehouse[];
  quantities: IWarehouseQuantity[];
}

const Warehouses: FC<WarehousesProps> = ({ warehouses, quantities }) => {
  console.log({quantities, warehouses});
  return (
    <Fragment>
      {warehouses.map(wh => (
        <Warehouse
          key={wh.id}
          wh={wh}
          quantities={quantities.filter(q => q.warehouseId === wh.id)!}
        />))
      }
    </Fragment>
  );
};

export default Warehouses;
