import { IMaterialState } from "../models/warehouse";

export const getMaterialStateColor = (materialState: IMaterialState) => {
  if (materialState === IMaterialState.available) {
    return 'green';
  }

  if (materialState === IMaterialState.taken) {
    return 'yellow';
  }

  if (materialState === IMaterialState.usedUp) {
    return 'red';
  }
};

export const getMaterialStateString = (materialState: IMaterialState) => {
  if (materialState === IMaterialState.available) {
    return 'available';
  }

  if (materialState === IMaterialState.taken) {
    return 'taken';
  }

  if (materialState === IMaterialState.usedUp) {
    return 'used up';
  }
};
