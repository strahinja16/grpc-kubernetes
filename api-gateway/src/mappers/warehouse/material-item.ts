import {AddMaterialItemDto, MaterialItem, MaterialState} from "../../proto/warehouse_pb";
import {IAddMaterialItemDto, IMaterialItem, MaterialStateEnum} from "../../models/warehouse/material-item";

class MaterialItemMapper {
    toGql(materialItem: MaterialItem): IMaterialItem {
        return {
            id: materialItem.getId(),
            materialTypeId: materialItem.getMaterialtypeid(),
            serial: materialItem.getSerial(),
            orderSerial: materialItem.getOrderserial(),
            warehouseId: materialItem.getWarehouseid(),
            materialState: (materialItem.getMaterialstate() as Number) as MaterialStateEnum,
        };
    }

    addMaterialItemDtoToGrpc(miDto: IAddMaterialItemDto): AddMaterialItemDto {
        const mi = new AddMaterialItemDto();
        mi.setMaterialstate((miDto.materialState as number) as MaterialState);
        mi.setWarehouseid(miDto.warehouseId);
        mi.setMaterialtypeid(miDto.materialTypeId);

        return mi;
    }
}

export const materialItemMapper =  new MaterialItemMapper();
