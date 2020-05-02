import React, { Dispatch, FC } from "react";
import { Button, Dropdown, Modal } from "semantic-ui-react";
import { orderStatesForDropdown, orderTimespansForDropdown } from "../../../util/order";
import { IOrderState, IOrderTimespan } from "../../../models/execution";
import './styles.scss';

export interface OrderFilterModalProps {
  closeModal: () => void
  setTimespan: Dispatch<any>;
  setOrderState: Dispatch<any>;
  timespan: IOrderTimespan;
  orderState: IOrderState;
}

const OrderFilterModal: FC<OrderFilterModalProps> = ({
  closeModal, setTimespan, setOrderState, orderState, timespan
}) => {
  return (
    <Modal className="order-filter" open size="mini">
      <Modal.Header>Order filters</Modal.Header>
      <Modal.Content className="order-filter__modal-content">
        <div className="order-filter__group">
          <label htmlFor="timespan">Set timespan</label>
          <Dropdown
            className="order-filter__dropdown"
            placeholder='Select timespan'
            fluid
            selection
            options={orderTimespansForDropdown}
            onChange={(e, data) => setTimespan(data.value)}
            value={timespan}
          />
        </div>
        <div className="order-filter__group">
          <label htmlFor="state">Set order state</label>
          <Dropdown
            className="order-filter__dropdown"
            placeholder='Select state'
            fluid
            selection
            disabled={timespan === IOrderTimespan.allUpcoming}
            options={orderStatesForDropdown}
            onChange={(e, data) => setOrderState(data.value)}
            value={orderState}
          />
        </div>
        <Button
          icon
          primary
          content="Submit"
          onClick={closeModal}
        />
      </Modal.Content>
    </Modal>
  )
};

export default OrderFilterModal;
