import React, { useState } from "react";
import {useQuery} from "@apollo/react-hooks";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import Loading from '../../components/Loading/Loading';
import { GET_ORDERS } from "../../graphql/queries/execution";
import { IOrderState, OrderTimespan } from "../../models/execution";
import OrderTable from "../../components/OrdersTable/OrdersTable";

const ExecutionDashboard = () => {
  const [orderState, setOrderState] = useState(IOrderState.started);
  const [timespan, setTimespan ] = useState(OrderTimespan.allUpcoming);


  const { data, loading } = useQuery(GET_ORDERS, {
    variables: { input: { state: Number(orderState), timespan: Number(timespan) } }
  });

  if (loading) return <Loading/>;

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
          onClick={() => {}}
        >
          <Icon name='clipboard' /> Schedule an order
        </Button>
      </div>
      <OrderTable orders={data.getOrders} />
    </Container>
  );
};

export default ExecutionDashboard;
