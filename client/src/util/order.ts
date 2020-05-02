import { IOrderState, OrderActions, IOrderTimespan } from "../models/execution";

export const getOrderStateColor = (OrderState: IOrderState) => {
  if (OrderState === IOrderState.started) {
    return 'yellow';
  }

  if (OrderState === IOrderState.paused) {
    return 'red';
  }

  if (OrderState === IOrderState.finished) {
    return 'green';
  }
};

export const getOrderStateString = (OrderState: IOrderState) => {
  if (OrderState === IOrderState.started) {
    return 'started';
  }

  if (OrderState === IOrderState.paused) {
    return 'paused';
  }

  if (OrderState === IOrderState.finished) {
    return 'finished';
  }
};

export const getNextExecutionActionNames = (state: IOrderState) => {
  if (state === IOrderState.started) {
    return [OrderActions.pause , OrderActions.finish]
  }

  if (state === IOrderState.paused) {
    return [OrderActions.start, OrderActions.finish];
  }

  return [];
};

export const getOrderActionColor = (action: string) => {
  if(action === OrderActions.start) {
    return 'yellow';
  }

  if(action === OrderActions.pause) {
    return 'red';
  }

  if(action === OrderActions.finish) {
    return 'green';
  }
};


export const getNextStateFromAction = (action: string) => {
  if(action === OrderActions.start) {
    return IOrderState.started;
  }

  if(action === OrderActions.pause) {
    return IOrderState.paused;
  }

  if(action === OrderActions.finish) {
    return IOrderState.finished;
  }
};


export const orderTimespansForDropdown = [
  {
    key: 'lastWeek',
    text: 'Last week',
    value: IOrderTimespan.lastWeek,
  },
  {
    key: 'currentWeek',
    text: 'Current week',
    value: IOrderTimespan.currentWeek,
  },
  {
    key: 'allUpcoming',
    text: 'All upcoming',
    value: IOrderTimespan.allUpcoming,
  }
];

export const orderStatesForDropdown = [
  {
    key: 'started',
    text: 'Started',
    value: IOrderState.started,
  },
  {
    key: 'paused',
    text: 'Paused',
    value: IOrderState.paused,
  },
  {
    key: 'finished',
    text: 'Finished',
    value: IOrderState.finished,
  }
];

