
import React, {FC} from 'react';
import Warehouse from "../Warehouse/Warehouse";
import {IWarehouse, IWarehouseQuantity} from "../../models/warehouse";
import { Card, Container, Divider, Header } from "semantic-ui-react";
import './styles.scss';

export interface WarehousesProps {
  warehouses: IWarehouse[];
  quantities: IWarehouseQuantity[];
}

const Warehouses: FC<WarehousesProps> = ({ warehouses, quantities }) => {
  return (
    <Container>
      <Header content="Warehouses" />
      <Card.Group className="warehouses">
        {
          warehouses.map(wh => (
            <Warehouse
              key={wh.id}
              wh={wh}
              quantities={quantities.filter(q => q.warehouseId === wh.id)!}
            />))
        }
      </Card.Group>
      <Divider />
    </Container>
  );
};

export default Warehouses;
