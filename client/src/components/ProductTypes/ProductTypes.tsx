
import React, { FC, useState } from "react";
import { IMaterialType, IProductType } from "../../models/warehouse";
import { Button, Container, Divider, Header, Icon, Table } from "semantic-ui-react";
import { lorem } from "../../util/lorem";
import AddProductTypeModal from "../modals/AddProductTypeModal/AddProductTypeModal";

export interface ProductTypesProps {
  productTypes: IProductType[];
  materialTypes: IMaterialType[];
}

const ProductTypes: FC<ProductTypesProps> = ({ productTypes, materialTypes }) => {
  const [showModal, setShowModal] = useState(false);
  const onAddProductType = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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
            <Table.Row key={mt.id}>
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
                primary
                onClick={onAddProductType}
              >
                <Icon name='product hunt' /> Add product type
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      {showModal && (
        <AddProductTypeModal
          materialTypes={materialTypes}
          closeModal={closeModal}
        />)
      }
      <Divider />
    </Container>
  );
};

export default ProductTypes;
