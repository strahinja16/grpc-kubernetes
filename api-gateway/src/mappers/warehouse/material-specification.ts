import {AddMaterialSpecificationDto, MaterialSpecification} from "../../proto/warehouse_pb";
import {IAddMaterialSpecificationDto, IMaterialSpecification} from "../../models/warehouse/material-specification";

class MaterialSpecificationMapper {
    toGql(materialSpecification: MaterialSpecification): IMaterialSpecification {
        return {
            id: materialSpecification.getId(),
            quantity: materialSpecification.getQuantity(),
            materialTypeId: materialSpecification.getMaterialtypeid(),
            productTypeId: materialSpecification.getProducttypeid(),
        };
    }

    addMaterialSpecDtoToGrpc(msDto: IAddMaterialSpecificationDto): AddMaterialSpecificationDto {
        const ms = new AddMaterialSpecificationDto();
        ms.setMaterialtypeid(msDto.materialTypeId);
        ms.setQuantity(msDto.quantity);

        return ms;
    }
}

export const materialSpecificationMapper =  new MaterialSpecificationMapper();
