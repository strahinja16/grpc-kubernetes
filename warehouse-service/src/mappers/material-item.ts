import {AddMaterialItemDto, MaterialItem, MaterialState} from "../proto/warehouse_pb";
import {MaterialItem as MaterialItemEntity, MaterialState as MaterialStateEnum } from "../db/entities/material-item";

class MaterialItemMapper {
    addMaterialItemDtoToTs(materialItem: AddMaterialItemDto): Partial<MaterialItemEntity> {
        return {
            materialTypeId: materialItem.getMaterialtypeid(),
            warehouseId: materialItem.getWarehouseid(),
            materialState: (materialItem.getMaterialstate() as Number) as MaterialStateEnum,
        };
    }

    toGrpc(materialItem: MaterialItemEntity): MaterialItem {
        const matItem = new MaterialItem();

        matItem.setId(materialItem.id);
        matItem.setWarehouseid(materialItem.warehouseId);
        matItem.setMaterialtypeid(materialItem.materialTypeId)
        matItem.setSerial(materialItem.serial);
        matItem.setOrderserial(materialItem.orderSerial);
        matItem.setMaterialstate((materialItem.materialState as Number) as MaterialState);

        return matItem;
    }
}


export const materialItemMapper =  new MaterialItemMapper();
