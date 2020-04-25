import {Order as OrderEntity} from "../db/entities/order";
import {Order, OrderDto, State} from "../proto/execution_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import {OrderSpecification} from "../db/entities/order-specification";


class OrderMapper {
    toGrpc(orderEntity: Partial<OrderEntity>): Order {
        const startDate = new Timestamp();
        startDate.fromDate(orderEntity.startDate);
        const endDate = new Timestamp();
        endDate.fromDate(orderEntity.endDate);

        const order = new Order();
        order.setId(orderEntity.id);
        order.setSerial(orderEntity.serial);
        order.setStartdate(startDate);
        order.setEnddate(endDate);
        order.setPersonnelid(orderEntity.personnelId);
        order.setState((orderEntity.state as number) as State);

        return order;
    }

    placeOrderDtoToTs(orderDto: OrderDto): { order: OrderEntity, orderSpecs: OrderSpecification[] } {
        const order = new OrderEntity();
        order.endDate = orderDto.getEnddate().toDate();
        order.serial = orderDto.getSerial();
        order.personnelId = orderDto.getPersonnelid();

        const orderSpecs: OrderSpecification[] = orderDto.getOrderspecsList().map(os => {
            const orderSpec = new OrderSpecification();

            orderSpec.productTypeId = os.getProducttypeid();
            orderSpec.quantity = os.getQuantity();

            return orderSpec;
        });

        return {
            order,
            orderSpecs,
        };
    }
}

export const orderMapper =  new OrderMapper();
