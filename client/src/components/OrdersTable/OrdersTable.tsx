import React, { FC, Fragment, useState } from "react";
import { IOrder, IOrderState } from "../../models/execution";
import { Icon, Label, Menu, Message, Table } from "semantic-ui-react";
import {
  getNextExecutionActionNames,
  getNextStateFromAction,
  getOrderActionColor,
  getOrderStateColor,
  getOrderStateString
} from "../../util/order";
import { useMutation } from "@apollo/react-hooks";
import {
  CHANGE_ORDER_STATE,
  CHANGE_ORDER_STATE_UPDATE,
  FINISH_ORDER,
  FINISH_ORDER_UPDATE
} from "../../graphql/mutations/execution";
import { getDateTimeFromTimestamp } from "../../util/date";
import { useHistory } from "react-router-dom";
import moment from 'moment'
import 'moment/min/locales';
import "./styles.scss";

export interface OrderTableProps {
  orders: IOrder[];
}

export enum PaginationArrow {
  left,
  right,
}

const OrderTable: FC<OrderTableProps> = ({ orders }) => {
  const pages = orders ? Math.ceil(orders.length / 5) : 1;

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [sorted, setSorted] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const orderStates = Object.values(IOrderState);
  const [changeOrderState, { data: changeOrderData }] = useMutation(CHANGE_ORDER_STATE, {
    update: CHANGE_ORDER_STATE_UPDATE(),
  });

  const [finishOrder, { data: finishOrderData }] = useMutation(FINISH_ORDER, {
    update: FINISH_ORDER_UPDATE(),
  });

  const stats = [IOrderState.started, IOrderState.paused, IOrderState.finished]
    .reduce((acc, state) => {
      return `${acc} \t ${orders
        .filter(o => o.state === state).length} ${getOrderStateString(state)} `
    }, '');

  const handlePageClicked = (page: number) => {
    setPage(page);
    if (page === 1) {
      setIndex(0)
    } else {
      setIndex((page - 1) * 4 + (page - 1))
    }
  };

  const setErrorBriefly = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  const handleArrowClicked = (arrow: PaginationArrow) => {
    const nextPage = arrow === PaginationArrow.left ? page - 1 : page + 1;
    handlePageClicked(nextPage);
  };

  const handleOnSortColumnClick = () => {
    setSorted(true);
    handlePageClicked(1);
  };

  const handleStateChangeAction = (order: IOrder, action: string) => {
    const nextState = getNextStateFromAction(action);
    if (nextState !== IOrderState.finished) {
      changeOrderState({
        variables: {
          input: {
            orderId: order.id,
            state: Number(getNextStateFromAction(action)),
          }
        }
      })
        .then(() => {
          if (changeOrderData && changeOrderData.error) {
            setErrorBriefly(changeOrderData.error);
          }
        })
        .catch((e) => setErrorBriefly(e.message));

      return;
    }

    finishOrder({
      variables: {
        input: {
          orderId: order.id,
          orderSerial: order.serial,
        }
      }
    })
      .then(() => {
        if (finishOrderData && finishOrderData.error) {
          setErrorBriefly(finishOrderData.error);
        }
      })
      .catch((e) => setErrorBriefly(e.message));
  };

  const getOrderState = (state: IOrderState) => {
    const color = getOrderStateColor(state);
    const content = getOrderStateString(state);

    return <Label color={color} horizontal content={content} />;
  };

  const handleOpenOrderDetails = (orderId: number) => {
    history.push(`/order/${orderId}`);
  };

  if (sorted) {
    orders = orders.sort((a, b) => {
      return orderStates.indexOf(a.state) - orderStates.indexOf(b.state);
    });
  }

  return (
    <div>
      {error && <Message attached negative><p>{error}</p></Message>}
      <Message
        attached
        header='Orders stats'
        content={stats}
      />
      <Table celled style={{ marginTop: 0 }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>SerialNo</Table.HeaderCell>
            <Table.HeaderCell>Start date</Table.HeaderCell>
            <Table.HeaderCell>End date</Table.HeaderCell>
            <Table.HeaderCell className="sort-header" onClick={handleOnSortColumnClick}>
              State
            </Table.HeaderCell>
            <Table.HeaderCell>
              Action
              {sorted &&  (
                <Fragment>
                  <Label as='a' color='purple' ribbon='right'>
                    Sorted
                  </Label>
                </Fragment>
              )}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orders.slice(index, index + 5).map(order => (
            <Table.Row key={order.id}>
              <Table.Cell
                className="sort-header"
                onClick={() => handleOpenOrderDetails(order.id)}
              >
                {order.serial}
              </Table.Cell>
              <Table.Cell>{getDateTimeFromTimestamp(Number(order.startDate))}</Table.Cell>
              <Table.Cell>{getDateTimeFromTimestamp(Number(order.endDate))}</Table.Cell>
              <Table.Cell>{getOrderState(order.state)}</Table.Cell>
              <Table.Cell>{getNextExecutionActionNames(order.state).map(action => (
                <Label
                  key={action}
                  className="sort-header augmentable"
                  onClick={() => handleStateChangeAction(order,action)}
                  content={action}
                  color={getOrderActionColor(action)}
                />))}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Menu floated='right' pagination>
                <Menu.Item
                  disabled={page === 1}
                  onClick={() => handleArrowClicked(PaginationArrow.left)}
                  as='a'
                  icon
                >
                  <Icon name='chevron left' />
                </Menu.Item>
                {
                  Array.from(Array(pages).keys()).map(p => (
                    <Menu.Item
                      key={p}
                      onClick={() => handlePageClicked(p + 1)}
                      disabled={p + 1 === page} as='a'
                    >
                      {p + 1}
                    </Menu.Item>
                  ))
                }
                <Menu.Item
                  disabled={page === pages}
                  onClick={() => handleArrowClicked(PaginationArrow.right)}
                  as='a'
                  icon
                >
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default OrderTable;
