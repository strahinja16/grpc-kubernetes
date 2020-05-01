import { IOrderState } from "../models/execution";

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
