import React, { Fragment } from 'react';
import {useQuery} from "@apollo/react-hooks";
import Loading from '../../components/Loading/Loading';
import {GET_WAREHOUSE_CONTENT} from "../../graphql/queries/warehouse";
import Warehouses from "../../components/Warehouses/Warehouses";
import {IWarehouseContent} from "../../models/warehouse";
import MaterialTypes from "../../components/MaterialTypes/MaterialTypes";
import ProductTypes from "../../components/ProductTypes/ProductTypes";

const WarehouseDashboard = () => {
  const { data, loading} = useQuery(GET_WAREHOUSE_CONTENT);
  if (loading) return <Loading/>;

  const { getWarehouseDashboardContent: content } : { getWarehouseDashboardContent: IWarehouseContent } = data;
  return (
    <Fragment>
      <Warehouses
        warehouses={content.warehouses}
        quantities={content.warehouseQuantities}
      />
      <MaterialTypes materialTypes={content.materialTypes}/>
      <ProductTypes
        productTypes={content.productTypes}
        materialTypes={content.materialTypes}
      />
    </Fragment>
  );
};

export default WarehouseDashboard;
