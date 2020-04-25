import {
    getRepository,
    getManager,
    EntityManager
} from 'typeorm';
import {v4 as uuid} from 'uuid';
import {Order, State as StateEnum} from "../entities/order";
import moment from 'moment';
import {OrderSpecification} from "../entities/order-specification";
import {OrderResponse} from "../entities/order-response";
import {Product} from "../entities/product";

export enum OrderTimespanEnum {
    currentWeek = 0,
    lastWeek = 1,
    allUpcoming = 2,
}

class ExecutionRepository {

    async getOrders(timespan: OrderTimespanEnum, states: StateEnum[]) {
        try {
            if (timespan === OrderTimespanEnum.currentWeek) {
                return this.getOrdersBeginningInTheWeek(moment().startOf('week').toDate(), states);
            }
            if (timespan === OrderTimespanEnum.lastWeek) {
                return this.getOrdersBeginningInTheWeek(
                    moment().startOf('week').subtract(1, 'week').toDate(),
                    states
                );
            }

            return this.getUpcomingOrders();
        }catch (e) {
            console.log(`execution-service: ExecutionRepository.getOrders error: ${e.toString()}`)
        }
    }

    async placeOrder(order: Order, orderSpecs: OrderSpecification[]): Promise<Order> {
        try {
            await getManager().transaction("SERIALIZABLE", async (entityManager: EntityManager) => {
                order.startDate = new Date();
                order.state = StateEnum.started;

                const savedOrder = await entityManager.save(order);

                const orderResponse = new OrderResponse();
                orderResponse.startDate = savedOrder.startDate;
                orderResponse.orderId = savedOrder.id;
                orderResponse.state = StateEnum.started;

                await entityManager.save(orderResponse);

                orderSpecs.forEach(os => os.orderId = savedOrder.id);
                await entityManager.save(orderSpecs);
            });

            return await getRepository(Order).findOne({ serial: order.serial });
        }catch (e) {
            console.log(`execution-service: ExecutionRepository.placeOrder error: ${e.toString()}`)
        }
    }

    async changeOrderState(orderId: number, nextState: StateEnum): Promise<Order> {
        try {
            await getManager().transaction("SERIALIZABLE", async (entityManager: EntityManager) => {
                const order = await getRepository(Order).findOne({ id: orderId });
                if (!order) {
                    throw new Error('Order not found.');
                }
                if (order.state === nextState) {
                    throw new Error(`Cannot change order state ${order.state} to ${nextState}.`);
                }

                const oldState = order.state;
                order.state = nextState;
                const savedOrder = await entityManager.save(order);

                const currentResponse = await entityManager.findOne(OrderResponse, {
                    orderId: orderId, endDate: null, state: oldState,
                });
                if (!currentResponse) {
                    throw new Error('Current order response not found.');
                }
                currentResponse.endDate = new Date();
                await entityManager.save(currentResponse);

                const orderResponse = new OrderResponse();
                orderResponse.startDate = new Date();
                orderResponse.order = savedOrder;
                orderResponse.state = nextState;
                await entityManager.save(orderResponse);
            });

            return await getRepository(Order).findOne({ id: orderId });
        }catch (e) {
            console.log(`execution-service: ExecutionRepository.changeOrderState error: ${e.toString()}`)
        }
    }

    async finishOrder(orderId: number) {
        try {
            await getManager().transaction("SERIALIZABLE", async (entityManager: EntityManager) => {
                const finishedOrder = await this.changeOrderState(orderId, StateEnum.finished);
                const orderSpecs = await entityManager.find(OrderSpecification, { orderId: finishedOrder.id });
                if (!orderSpecs) {
                    throw new Error('Order specs not found.');
                }

                const products: Product[] = [];
                orderSpecs.forEach(os => {
                    Array.from(Array(os.quantity).keys()).forEach(_ => {
                        const product = new Product();
                        product.productTypeId = os.productTypeId;
                        product.orderId = finishedOrder.id;
                        product.serial = uuid();

                        products.push(product);
                    });
                });

                await entityManager.save(products);
            });

            return await getRepository(Order).findOne({ id: orderId });
        }catch (e) {
            console.log(`execution-service: ExecutionRepository.changeOrderState error: ${e.toString()}`)
        }
    }

    private getOrdersBeginningInTheWeek = async (weekStart: Date, states: StateEnum[]): Promise<Order[]> => {
        const orderRepository = getRepository(Order);

        return await orderRepository.createQueryBuilder("o")
            .where("o.startDate >= :startDate and o.startDate <= :endDate and o.state in (:...states)")
            .setParameters({
                startDate: weekStart,
                endDate: moment(weekStart).add(1, 'week').toDate(),
                states,
            })
            .getMany();
    };

    private getUpcomingOrders = async (): Promise<Order[]> => {
        const orderRepository = getRepository(Order);

        return await orderRepository.createQueryBuilder("o")
            .where("o.startDate >= :startDate")
            .setParameters({ startDate: moment().startOf('day').toDate() })
            .getMany();
    };
}

export const executionRepository = new ExecutionRepository();
