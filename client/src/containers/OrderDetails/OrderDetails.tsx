import React from "react";
import {useQuery} from "@apollo/react-hooks";
import { useParams } from 'react-router-dom';
import { Container, Header } from "semantic-ui-react";
import Loading from '../../components/Loading/Loading';
import OrderResponseTable from "../../components/OrderResponseTable/OrderResponseTable";
import { GET_ORDER_RESPONSES } from "../../graphql/queries/execution";
import './styles.scss';

const OrderDetails = () => {
  const { id } = useParams();
  const { data, loading} = useQuery(GET_ORDER_RESPONSES, {
    variables: { input: { orderId: Number(id) } },
    fetchPolicy: "network-only",
  });

  if (loading) return <Loading/>;

  return (
    <Container className="order-details-container">
      <div className="order-details-container__header-wrapper">
        <Header
          className="order-details-container__header"
          content="Order details"
        />
      </div>
      <OrderResponseTable
        orderResponses={data.getOrderResponses}
      />
    </Container>
  );
};

export default OrderDetails;
