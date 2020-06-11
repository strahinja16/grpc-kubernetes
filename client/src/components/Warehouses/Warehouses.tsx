
import React, { FC, useState } from "react";
import Warehouse from "../Warehouse/Warehouse";
import {IWarehouse, IWarehouseQuantity} from "../../models/warehouse";
import { Button, Container, Divider, Grid, GridColumn, Header, Icon } from "semantic-ui-react";
import AddWarehouseModal from "../Modals/AddWarehouseModal/AddWarehouseModal";
import './styles.scss';
import { useQuery } from "@apollo/react-hooks";
import { GET_LOGGED_IN_USER } from "../../graphql/queries/personnel";
import { RoleEnum as Role } from "../../models/personnel";

export interface WarehousesProps {
  warehouses: IWarehouse[];
  quantities: IWarehouseQuantity[];
}

const Warehouses: FC<WarehousesProps> = ({ warehouses, quantities }) => {
  const [showModal, setShowModal] = useState(false);
  const onAddWarehouse = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const { data: userData } = useQuery(GET_LOGGED_IN_USER);

  return (
    <Container className="warehouses-container">
      <div className="warehouses-container__header-wrapper">
        <Header
          className="warehouses-container__header"
          content="Warehouses"
        />
        {
          [Role.admin, Role.manager].includes(userData.user.role as Role) &&
          <Button
            className="warehouses-container__header-button"
            icon
            labelPosition='left'
            primary
            floated="right"
            onClick={onAddWarehouse}
          >
            <Icon name='warehouse' /> Add warehouse
          </Button>
        }
      </div>
      <Grid className="warehouses-container__warehouses" stackable columns={4}>
        {
          warehouses.map(wh => (
            <GridColumn stretched key={wh.id}>
              <Warehouse
                key={wh.id}
                wh={wh}
                quantities={quantities.filter(q => q.warehouseId === wh.id)!}
              />
            </GridColumn>))
        }
      </Grid>
      {showModal && <AddWarehouseModal closeModal={closeModal} />}
      <Divider />
    </Container>
  );
};

export default Warehouses;
