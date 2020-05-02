
export enum OrderTimespan {
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

export const OrderActions = {
  start: 'start',
  pause: 'pause',
  finish: 'finish'
};