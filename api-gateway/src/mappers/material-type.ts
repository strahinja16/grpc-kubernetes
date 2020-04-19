import {MaterialType} from "../proto/warehouse/warehouse_pb";
import {IMaterialType} from "../models/material-type";

class MaterialTypeMapper {
    toGql(materialType: MaterialType): IMaterialType {
        return {
            id: materialType.getId(),
            name: materialType.getName(),
        };
    }

    toGrpc(materialType: IMaterialType): MaterialType {
        const matType = new MaterialType();
        matType.setId(materialType.id);
        matType.setName(materialType.name);

        return matType;
    }
}


export const materialTypeMapper =  new MaterialTypeMapper();
