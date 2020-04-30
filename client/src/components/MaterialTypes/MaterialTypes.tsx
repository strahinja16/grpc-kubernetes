import React, {FC} from 'react';
import {IMaterialType} from "../../models/warehouse";
import { Button, Container, Divider, Header, Icon, Table } from "semantic-ui-react";
import { lorem } from "../../util/lorem";

export interface MaterialTypesProps {
  materialTypes: IMaterialType[];
}

const MaterialTypes: FC<MaterialTypesProps> = ({ materialTypes }) => {
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
            <Table.Row>
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
              >
                <Icon name='archive' /> Add material type
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Divider />
    </Container>
  );
};

export default MaterialTypes;
