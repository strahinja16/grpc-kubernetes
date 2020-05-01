import React, { FC, useState } from "react";
import {IMaterialType} from "../../models/warehouse";
import { Button, Container, Divider, Header, Icon, Table } from "semantic-ui-react";
import { lorem } from "../../util/lorem";
import AddMaterialTypeModal from "../modals/AddMaterialTypeModal/AddMaterialTypeModal";

export interface MaterialTypesProps {
  materialTypes: IMaterialType[];
}

const MaterialTypes: FC<MaterialTypesProps> = ({ materialTypes }) => {
  const [showModal, setShowModal] = useState(false);
  const onAddMaterialType = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Container>
      <Header content="Material types" />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {materialTypes.map(mt => (
            <Table.Row key={mt.id}>
              <Table.Cell>{mt.name}</Table.Cell>
              <Table.Cell>{lorem.generateSentences(1)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>
              <Button
                floated='right'
                icon
                labelPosition='left'
                size='small'
                primary
                onClick={onAddMaterialType}
              >
                <Icon name='archive' /> Add material type
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      {showModal && <AddMaterialTypeModal closeModal={closeModal} />}
      <Divider />
    </Container>
  );
};

export default MaterialTypes;
