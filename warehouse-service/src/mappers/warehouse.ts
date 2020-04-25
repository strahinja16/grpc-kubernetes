import {AddWarehouseDto, Warehouse} from "../proto/warehouse_pb";
import {Warehouse as WarehouseEntity} from "../db/entities/warehouse";

class WarehouseMapper {
    addWarehouseDtoToTs(warehouse: AddWarehouseDto): Partial<WarehouseEntity> {
        return {
            name: warehouse.getName(),
            capacity: warehouse.getCapacity(),
        } as WarehouseEntity;
    }

    toGrpc(warehouse: WarehouseEntity): Warehouse {
        const wh = new Warehouse();
        wh.setId(warehouse.id);
        wh.setName(warehouse.name);
        wh.setCapacity(warehouse.capacity);

        return wh;
    }
}


export const warehouseMapper =  new WarehouseMapper();
