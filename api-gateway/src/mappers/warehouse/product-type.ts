import {AddProductTypeDto, ProductType} from "../../proto/warehouse_pb";
import {IAddProductTypeDto, IProductType} from "../../models/warehouse/product-type";

class ProductTypeMapper {
    toGql(productType: ProductType): IProductType {
        return {
            id: productType.getId(),
            name: productType.getName(),
            price: productType.getPrice(),
        };
    }

    addProductTypeDtoToGrpc(ptDto: IAddProductTypeDto): AddProductTypeDto {
        const prodType = new AddProductTypeDto();
        prodType.setName(ptDto.name);
        prodType.setPrice(ptDto.price);

        return prodType;
    }
}

export const productTypeMapper =  new ProductTypeMapper();
