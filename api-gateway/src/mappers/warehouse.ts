import {Warehouse} from "../proto/warehouse/warehouse_pb";
import {IWarehouse} from "../models/warehouse";

class WarehouseMapper {
    toGql(warehouse: Warehouse): IWarehouse {
        return {
            id: warehouse.getId(),
            name: warehouse.getName(),
            capacity: warehouse.getCapacity(),
        };
    }

    toGrpc(warehouse: IWarehouse): Warehouse {
        const wh = new Warehouse();
        wh.setId(warehouse.id);
        wh.setName(warehouse.name);
        wh.setCapacity(warehouse.capacity);

        return wh;
    }
}


export const warehouseMapper =  new WarehouseMapper();
