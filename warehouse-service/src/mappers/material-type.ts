import {MaterialType} from "../proto/warehouse_pb";
import {MaterialType as MaterialTypeEntity} from "../db/entities/material-type";

class MaterialTypeMapper {
    toGrpc(materialType: MaterialTypeEntity): MaterialType {
        const matType = new MaterialType();
        matType.setId(materialType.id);
        matType.setName(materialType.name);

        return matType;
    }
}


export const materialTypeMapper =  new MaterialTypeMapper();
