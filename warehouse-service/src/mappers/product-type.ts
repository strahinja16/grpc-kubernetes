import {AddProductTypeDto, ProductType} from "../proto/warehouse_pb";
import {ProductType as ProductTypeEntity} from "../db/entities/product-type";

class ProductTypeMapper {
    addProductTypeDtoToTs(ptDto: AddProductTypeDto): Partial<ProductTypeEntity> {
        return {
            name: ptDto.getName(),
            price: ptDto.getPrice(),
        }
    }

    toGrpc(productType: ProductTypeEntity): ProductType {
        const prodType = new ProductType();
        prodType.setId(productType.id);
        prodType.setName(productType.name);
        prodType.setPrice(productType.price);

        return prodType;
    }
}

export const productTypeMapper =  new ProductTypeMapper();
