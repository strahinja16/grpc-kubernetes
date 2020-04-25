
import {IOrder, StateEnum} from "../../models/execution/order";
import {Order} from "../../proto/execution_pb";

class OrderMapper {
    toGql(order: Order): IOrder {
        return {
            id: order.getId(),
            startDate: order.getStartdate()!.toDate(),
            endDate: order.getEnddate()!.toDate(),
            serial: order.getSerial(),
            state: (order.getState() as number) as StateEnum,
            personnelId: order.getPersonnelid(),
        };
    }
}

export const orderMapper =  new OrderMapper();
