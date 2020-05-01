import React, { FC, Fragment, useState } from "react";
import { IOrder, IOrderState } from "../../models/execution";
import { Icon, Label, Menu, Message, Table } from "semantic-ui-react";
import { getOrderStateColor, getOrderStateString } from "../../util/orderState";
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
  const orderStates = Object.values(IOrderState);
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
      setIndex((page - 1) * 4 + (page -2))
    }
  };

  const handleArrowClicked = (arrow: PaginationArrow) => {
    const nextPage = arrow === PaginationArrow.left ? page - 1 : page + 1;
    handlePageClicked(nextPage);
  };

  const handleOnSortColumnClick = () => {
    setSorted(true);
    handlePageClicked(1);
  };

  const getOrderState = (state: IOrderState) => {
    const color = getOrderStateColor(state);
    const content = getOrderStateString(state);

    return <Label color={color} horizontal content={content} />;
  };

  if (sorted) {
    orders = orders.sort((a, b) => {
      return orderStates.indexOf(a.state) - orderStates.indexOf(b.state);
    });
  }

  return (
    <div>
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
              {sorted &&  (
                <Fragment>
                  <Label as='a' color='purple' ribbon='right'>
                    Sorted
                  </Label>
                </Fragment>
              )}
            </Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orders.slice(index, index + 5).map(order => (
            <Table.Row key={order.id}>
              <Table.Cell>{order.serial}</Table.Cell>
              <Table.Cell>{order.startDate}</Table.Cell>
              <Table.Cell>{getOrderState(order.state)}</Table.Cell>
              <Table.Cell>Action</Table.Cell>
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
