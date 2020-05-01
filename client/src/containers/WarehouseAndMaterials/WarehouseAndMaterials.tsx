import React, { useState } from "react";
import {useQuery} from "@apollo/react-hooks";
import { useParams } from 'react-router-dom';
import { Button, Container, Divider, Grid, GridColumn, Header, Icon } from "semantic-ui-react";
import Loading from '../../components/Loading/Loading';
import {
  GET_MATERIAL_TYPES_AND_WAREHOUSES_CLIENT,
  GET_WAREHOUSE_MATERIAL_ITEMS
} from "../../graphql/queries/warehouse";
import { IMaterialItem, IWarehouse } from "../../models/warehouse";
import MaterialItemTable from "../../components/MaterialItemTable/MaterialItemTable";
import './styles.scss';
import AddMaterialItemsModal from "../../components/modals/AddMaterialItemsModal/AddMaterialItemsModal";

const WarehouseAndMaterials = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const { data: materialTypeAndWhData} = useQuery(GET_MATERIAL_TYPES_AND_WAREHOUSES_CLIENT);
  const { data, loading} = useQuery(GET_WAREHOUSE_MATERIAL_ITEMS, {
    variables: { input: { warehouseId: Number(id) } }
  });
  const onAddMaterialItems = () => setShowModal(true);

  if (loading) return <Loading/>;

  const { getMaterialItems }: { getMaterialItems: IMaterialItem[] } = data;
  const distinctMaterialTypes = Array.from(new Set([...getMaterialItems.map(mi => mi.materialTypeId)]));
  const warehouseName = materialTypeAndWhData.getWarehouseDashboardContent.warehouses
    .find((wh: IWarehouse) => wh.id === Number(id))!.name;

  return (
    <Container className="material-items-container">
      <div className="material-items-container__header-wrapper">
        <Header
          className="material-items-container__header"
          content={`Materials at ${warehouseName}`}
        />
        <Button
          className="material-items-container__header-button"
          icon
          labelPosition='left'
          primary
          floated="right"
          onClick={onAddMaterialItems}
        >
          <Icon name='warehouse' /> Add materials
        </Button>
      </div>
      <Grid className="material-items-container__material-items" stackable columns={1}>
        {
          distinctMaterialTypes.map(mt => (
            <GridColumn key={mt}>
              <MaterialItemTable
                materialItems={getMaterialItems.filter(mi => mi.materialTypeId === mt)}
                materialTypes={materialTypeAndWhData.getWarehouseDashboardContent.materialTypes}
              />
            </GridColumn>
          ))
        }
      </Grid>
      {showModal && (
          <AddMaterialItemsModal
            materialTypes={materialTypeAndWhData.getWarehouseDashboardContent.materialTypes}
            closeModal={closeModal}
            warehouseId={id}
          />
        )
      }
      <Divider />
    </Container>
  );
};

export default WarehouseAndMaterials;
