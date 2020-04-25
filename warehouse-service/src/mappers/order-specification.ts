
import {OrderSpecificationDto} from "../proto/execution_pb";

export interface IOrderSpec {
    productTypeId: number;
    quantity: number;
}

class OrderSpecMapper {
    orderSpecificationDtoToTs(orderSpecDtos: OrderSpecificationDto[]): IOrderSpec[] {
        return orderSpecDtos.map(osDto => ({
            productTypeId: osDto.getProducttypeid(),
            quantity: osDto.getQuantity(),
        }));
    }
}

export const orderSpecMapper =  new OrderSpecMapper();
