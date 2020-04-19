import {MaterialItem, MaterialState} from "../proto/warehouse/warehouse_pb";
import {MaterialItem as MaterialItemEntity, MaterialState as MaterialStateEnum } from "../db/entities/material-item";
import {materialTypeMapper} from "./material-type";
import {warehouseMapper} from "./warehouse";

class MaterialItemMapper {
    toTs(materialItem: MaterialItem): MaterialItemEntity {
        return {
            id: materialItem.getId(),
            materialType: materialTypeMapper.toTs(materialItem.getMaterialtype()!),
            serial: materialItem.getSerial(),
            orderSerial: materialItem.getOrderserial(),
            warehouse: warehouseMapper.toTs(materialItem.getWarehouse()!),
            materialState: (materialItem.getMaterialstate() as Number) as MaterialStateEnum,
        };
    }

    toGrpc(materialItem: MaterialItemEntity): MaterialItem {
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
