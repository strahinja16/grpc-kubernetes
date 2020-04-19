import {MaterialType} from "../proto/warehouse/warehouse_pb";
import {MaterialType as MaterialTypeEntity} from "../db/entities/material-type";

class MaterialTypeMapper {
    toTs(materialType: MaterialType): MaterialTypeEntity {
        return {
            id: materialType.getId(),
            name: materialType.getName(),
        };
    }

    toGrpc(materialType: MaterialTypeEntity): MaterialType {
        const matType = new MaterialType();
        matType.setId(materialType.id);
        matType.setName(materialType.name);

        return matType;
    }
}


export const materialTypeMapper =  new MaterialTypeMapper();
