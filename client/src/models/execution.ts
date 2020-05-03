
export enum IOrderTimespan {
  currentWeek = 0,
  lastWeek = 1,
  allUpcoming = 2,
}

export enum IOrderState  {
  started,
  paused,
  finished,
}

export interface IOrder {
  id: number;
  serial: string;
  startDate: Date;
  endDate: Date;
  state: IOrderState;
  personnelId: string;
}

export interface IOrderResponse {
  id: number;
  orderId: number;
  startDate: Date;
  endDate: Date | null;
  state: IOrderState;
}

export const OrderActions = {
  start: 'start',
  pause: 'pause',
  finish: 'finish'
};
