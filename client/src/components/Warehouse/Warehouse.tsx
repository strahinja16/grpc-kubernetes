
import React, {FC} from 'react';
import {IWarehouse, IWarehouseQuantity} from "../../models/warehouse";
import { Card, Icon, List } from "semantic-ui-react";
import { lorem } from "../../util/lorem";
import './styles.scss';
import { useHistory } from 'react-router-dom';

export interface WarehouseProps {
  wh: IWarehouse;
  quantities: IWarehouseQuantity[];
}

const Warehouse: FC<WarehouseProps> = ({ wh, quantities }) => {
  const history = useHistory();

  return (
    <Card className="warehouse">
      <Card.Content className="warehouse__content">
        <Card.Header
          onClick={() => history.push(`/warehouse/${wh.id}`)}
          className="warehouse__header">{wh.name}</Card.Header>
        <Icon
          className="warehouse__icon"
          name="warehouse"
          corner={"top right"}
        />
        <Card.Meta>Capacity: <strong>{quantities.reduce((acc, q) => acc + q.count, 0)} / {wh.capacity}</strong></Card.Meta>
        <Card.Description>
          {lorem.generateSentences(3)}
        </Card.Description>
        <List divided relaxed>
          {
            quantities.map(qt => (
              <List.Item key={qt.materialName}>
                <List.Icon name='archive' size='large' verticalAlign='middle'/>
                <List.Content>
                  <List.Header>{qt.count} {qt.materialName}</List.Header>
                  <List.Description as='a'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</List.Description>
                </List.Content>
              </List.Item>
            ))
          }
        </List>
      </Card.Content>
    </Card>
  );
};

export default Warehouse;
