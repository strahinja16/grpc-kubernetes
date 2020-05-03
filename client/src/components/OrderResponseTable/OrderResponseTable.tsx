import React, { FC, useState } from "react";
import { IOrderResponse } from "../../models/execution";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { getDateTimeFromTimestamp } from "../../util/date";
import {
  getOrderStateColor,
  getOrderStateString
} from "../../util/order";

export interface OrderResponseTableProps {
  orderResponses: IOrderResponse[];
}

export enum PaginationArrow {
  left,
  right,
}

const OrderResponseTable: FC<OrderResponseTableProps> = ({ orderResponses }) => {
  const pages = orderResponses ? Math.ceil(orderResponses.length / 5) : 1;

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);

  const handlePageClicked = (page: number) => {
    setPage(page);
    if (page === 1) {
      setIndex(0)
    } else {
      setIndex((page - 1) * 4 + (page - 1))
    }
  };

  const handleArrowClicked = (arrow: PaginationArrow) => {
    const nextPage = arrow === PaginationArrow.left ? page - 1 : page + 1;
    handlePageClicked(nextPage);
  };

  console.log({ orderResponses });

  console.log( { index, sliced: orderResponses.slice(index, index + 5) });

  return (
    <div>
      <Table celled style={{ marginTop: 0 }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Beginning</Table.HeaderCell>
            <Table.HeaderCell>End</Table.HeaderCell>
            <Table.HeaderCell>State</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orderResponses.slice(index, index + 5).map(or => (
            <Table.Row key={or.id}>
              <Table.Cell>{getDateTimeFromTimestamp(Number(or.startDate))}</Table.Cell>
              <Table.Cell>{getDateTimeFromTimestamp(Number(or.endDate))}</Table.Cell>
              <Table.Cell>
                <Label
                  content={getOrderStateString(or.state)}
                  color={getOrderStateColor(or.state)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
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

export default OrderResponseTable;
