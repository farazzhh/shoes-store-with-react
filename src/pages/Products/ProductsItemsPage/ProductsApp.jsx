import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ProductItemsPage from "./ProductItemsPage";
import { DataContext } from "../../../providers/DataContext";

const ProductsApp = (props) => {

  // data is full dataJson and resultData is category or item was selected with user
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(DataContext);
  
  const [checkData, setCheckData] = useState(false);

  // get path from params
  const params = props.match.params;

  useEffect(() => {
    if (data.items) {

      // filter target category prom DataJson
      const [result] = data.items.filter(
        (item) => item.category === params.category
      );
      requestDataHandler(result);
      result && setCheckData(true);
    }
  }, [params.category]);
// call components to render the category was filtered before
  return <ProductItemsPage props={props} />;
};

export default ProductsApp;

export const ProductsAppWrapper = styled.div`
  position: relative;
`;
