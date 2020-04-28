
import React, {FC} from 'react';
import {IWarehouse, IWarehouseQuantity} from "../../models/warehouse";

export interface WarehouseProps {
  wh: IWarehouse;
  quantities: IWarehouseQuantity[];
}

const Warehouse: FC<WarehouseProps> = ({ wh, quantities }) => {
  return (
    <div>
      {quantities.reduce((acc, q) => acc + q.count, 0)} / {wh.capacity}
    </div>
  )
};

export default Warehouse;
