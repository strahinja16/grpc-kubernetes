
import React, {FC} from 'react';
import { IProductType } from "../../models/warehouse";
import { Button, Container, Divider, Header, Icon, Table } from "semantic-ui-react";
import { lorem } from "../../util/lorem";

export interface ProductTypesProps {
  productTypes: IProductType[];
}

const ProductTypes: FC<ProductTypesProps> = ({ productTypes }) => {
  return (
    <Container>
      <Header content="Product types" />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {productTypes.map(mt => (
            <Table.Row>
              <Table.Cell>{mt.name}</Table.Cell>
              <Table.Cell>${mt.price}</Table.Cell>
              <Table.Cell>{lorem.generateSentences(1)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Button
                floated='right'
                icon
                labelPosition='left'
                size='small'
              >
                <Icon name='product hunt' /> Add product type
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Divider />
    </Container>
  );
};

export default ProductTypes;
