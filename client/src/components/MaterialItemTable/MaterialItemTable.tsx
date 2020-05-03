import React, { FC, Fragment, useState } from "react";
import { IMaterialItem, IMaterialState, IMaterialType } from "../../models/warehouse";
import { Icon, Label, Menu, Message, Table } from "semantic-ui-react";
import { getMaterialStateColor, getMaterialStateString } from "../../util/material";
import "./styles.scss";

export interface MaterialItemTableProps {
  materialItems: IMaterialItem[];
  materialTypes: IMaterialType[]
}

export enum PaginationArrow {
  left,
  right,
}

const MaterialItemTable: FC<MaterialItemTableProps> = ({ materialItems, materialTypes }) => {
  const pages = materialItems
    ? Math.ceil(materialItems.length / 5)
    : 1;

  const materialName = materialItems
    ? materialTypes.find(mt => mt.id === materialItems[0].materialTypeId)!.name
    : 'noname';
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [sorted, setSorted] = useState(false);
  const materialStates = Object.values(IMaterialState);
  const stats = [IMaterialState.available, IMaterialState.taken, IMaterialState.usedUp]
    .reduce((acc, state) => {
    return `${acc} \t ${materialItems
      .filter(mi => mi.materialState === state).length} ${getMaterialStateString(state as IMaterialState)} `
  }, '');

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

  const handleOnSortColumnClick = () => {
    setSorted(true);
    handlePageClicked(1);
  };

  const getMaterialState = (state: IMaterialState) => {
    const color = getMaterialStateColor(state);
    const content = getMaterialStateString(state);

    return <Label color={color} horizontal content={content} />;
  };

  if (sorted) {

    materialItems = materialItems.sort((a, b) => {
      return materialStates.indexOf(a.materialState) - materialStates.indexOf(b.materialState);
    });
  }

  return (
    <div>
      <Message
        attached
        header={materialName}
        content={stats}
      />
      <Table celled style={{ marginTop: 0 }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Material</Table.HeaderCell>
            <Table.HeaderCell>SerialNo</Table.HeaderCell>
            <Table.HeaderCell className="sort-header" onClick={handleOnSortColumnClick}>
              Status
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
          {materialItems.slice(index, index + 5).map((mi, index) => (
            <Table.Row key={mi.id}>
              <Table.Cell>{materialName}-{(index + 1) + (page - 1)* 5}</Table.Cell>
              <Table.Cell>{mi.serial}</Table.Cell>
              <Table.Cell>{getMaterialState(mi.materialState)}</Table.Cell>
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

export default MaterialItemTable;
