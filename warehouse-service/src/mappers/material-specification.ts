import {AddMaterialSpecificationDto, MaterialSpecification} from "../proto/warehouse_pb";
import {MaterialSpecification as MaterialSpecificationEntity} from "../db/entities/material-specification";

class MaterialSpecificationMapper {
    toGrpc(materialSpecification: MaterialSpecificationEntity): MaterialSpecification {
        const matItem = new MaterialSpecification();

        matItem.setId(materialSpecification.id);
        matItem.setQuantity(materialSpecification.quantity);
        matItem.setMaterialtypeid(materialSpecification.materialTypeId);
        matItem.setProducttypeid(materialSpecification.productTypeId);

        return matItem;
    }

    addMaterialSpecificationDtoToTs(msDto: AddMaterialSpecificationDto): Partial<MaterialSpecificationEntity> {
        return {
            quantity: msDto.getQuantity(),
            materialTypeId: msDto.getMaterialtypeid(),
        }
    }
}

export const materialSpecificationMapper =  new MaterialSpecificationMapper();
