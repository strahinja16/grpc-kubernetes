import {MaterialItem, MaterialState} from "../proto/warehouse/warehouse_pb";
import {IMaterialItem, MaterialStateEnum} from "../models/material-item";
import {materialTypeMapper} from "./material-type";
import {warehouseMapper} from "./warehouse";

class MaterialItemMapper {
    toGql(materialItem: MaterialItem): IMaterialItem {
        return {
            id: materialItem.getId(),
            materialType: materialTypeMapper.toGql(materialItem.getMaterialtype()!),
            serial: materialItem.getSerial(),
            orderSerial: materialItem.getOrderserial(),
            warehouse: warehouseMapper.toGql(materialItem.getWarehouse()!),
            materialState: (materialItem.getMaterialstate() as Number) as MaterialStateEnum,
        };
    }

    toGrpc(materialItem: IMaterialItem): MaterialItem {
        const matItem = new MaterialItem();

        matItem.setId(materialItem.id);
        matItem.setWarehouse(warehouseMapper.toGrpc(materialItem.warehouse));
        matItem.setSerial(materialItem.serial);
        matItem.setOrderserial(materialItem.orderSerial);
        matItem.setMaterialtype(materialTypeMapper.toGrpc(materialItem.materialType));
        matItem.setMaterialstate((materialItem.materialState as Number) as MaterialState);

        return matItem;
    }
}


export const materialItemMapper =  new MaterialItemMapper();
