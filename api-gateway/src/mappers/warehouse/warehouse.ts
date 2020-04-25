import {AddWarehouseDto, Warehouse} from "../../proto/warehouse_pb";
import {IAddWarehouseDto, IWarehouse} from "../../models/warehouse/warehouse";

class WarehouseMapper {
    toGql(warehouse: Warehouse): IWarehouse {
        return {
            id: warehouse.getId(),
            name: warehouse.getName(),
            capacity: warehouse.getCapacity(),
        };
    }

    addWarehouseDtoToGrpc(whDto: IAddWarehouseDto): AddWarehouseDto {
        const wh = new AddWarehouseDto();
        wh.setName(whDto.name);
        wh.setCapacity(whDto.capacity);

        return wh;
    }
}

export const warehouseMapper =  new WarehouseMapper();
