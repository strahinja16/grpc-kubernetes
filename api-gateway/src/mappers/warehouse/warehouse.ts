import {AddWarehouseDto, GetWarehouseDashboardContentResponse, Warehouse} from "../../proto/warehouse_pb";
import {IAddWarehouseDto, IWarehouse} from "../../graphql/models/warehouse/warehouse";
import {IWarehouseDashboardContent} from "../../graphql/models/warehouse/custom";
import {materialTypeMapper} from "./material-type";
import {productTypeMapper} from "./product-type";

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

    warehouseDashboardContentToGql(whdcGrpc: GetWarehouseDashboardContentResponse): IWarehouseDashboardContent {
        return {
            warehouses: whdcGrpc.getWarehousesList().map(wh => this.toGql(wh)),
            materialTypes: whdcGrpc.getMaterialtypesList().map(mt => materialTypeMapper.toGql(mt)),
            productTypes: whdcGrpc.getProducttypesList().map(pt => productTypeMapper.toGql(pt)),
            warehouseQuantities: whdcGrpc.getWarehousequantitiesList().map(whq => ({
                warehouseId: whq.getWarehouseid(),
                materialName: whq.getMaterialname(),
                count: whq.getCount(),
            })),
        }
    }
}

export const warehouseMapper =  new WarehouseMapper();
