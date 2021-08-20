import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ProductItemsPage from "./ProductItemsPage";
import { ProductsContext } from "../../../providers/ProductsContext";
import { render } from "@testing-library/react";
import { BadUrl } from "../../../components/PublicComponents/BadUrl";

const ProductsApp = (props) => {
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);
  const [checkData, setCheckData] = useState(false);

  const params = props.match.params;

  useEffect(() => {
    if (data.items) {
      const [result] = data.items.filter(
        (item) => item.category == params.category
      );
      requestDataHandler(result);
      result && setCheckData(true);
    }
  }, [params.category]);
  
  return checkData ? <ProductItemsPage props={props} /> : <BadUrl />;
};

export default ProductsApp;

export const ProductsAppWrapper = styled.div`
  position: relative;
`;
