import React, { useState } from "react";
import {useQuery} from "@apollo/react-hooks";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import Loading from '../../components/Loading/Loading';
import { GET_ORDERS } from "../../graphql/queries/execution";
import { IOrderState, IOrderTimespan } from "../../models/execution";
import OrderTable from "../../components/OrdersTable/OrdersTable";
import PlaceOrderModal from "../../components/Modals/PlaceOrderModal/PlaceOrderModal";
import OrderFilterModal from "../../components/Modals/OrderFilterModal/OrderFilterModal";
import './styles.scss';

const ExecutionDashboard = () => {
  const [orderState, setOrderState] = useState(IOrderState.started);
  const [timespan, setTimespan ] = useState(IOrderTimespan.allUpcoming);
  const [showPlaceOrderModal, setShowPlaceOrderModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const onShowFilter = () => setShowFilterModal(true);
  const onPlaceOrder = () => setShowPlaceOrderModal(true);
  const closePlaceOrderModal = () => setShowPlaceOrderModal(false);
  const closeFilterModal = () => setShowFilterModal(false);

  const { data, loading } = useQuery(GET_ORDERS, {
    variables: { input: { state: Number(orderState), timespan: Number(timespan) } },
    fetchPolicy: "network-only",
  });

  return (
    <Container className="order-container">
      <div className="order-container__header-wrapper">
        <Header
          className="order-container__header"
          content="Orders"
        />
        <Button
          className="order-container__header-button"
          icon
          labelPosition='left'
          primary
          floated="right"
          onClick={onPlaceOrder}
        >
          <Icon name='clipboard' /> Schedule an order
        </Button>
        <Button
          className="order-container__header-button"
          icon
          labelPosition='left'
          color="purple"
          floated="right"
          onClick={onShowFilter}
        >
          <Icon name='filter' /> Filter
        </Button>
      </div>
      {loading ? <Loading /> : <OrderTable orders={data.getOrders} />}
      {showPlaceOrderModal && <PlaceOrderModal closeModal={closePlaceOrderModal}/>}
      {showFilterModal && (
        <OrderFilterModal
          setOrderState={setOrderState}
          setTimespan={setTimespan}
          closeModal={closeFilterModal}
          timespan={timespan}
          orderState={orderState}
        />
      )}
    </Container>
  );
};

export default ExecutionDashboard;
