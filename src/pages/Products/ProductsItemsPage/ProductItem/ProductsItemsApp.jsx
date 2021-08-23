import React, { useContext, useEffect, useState } from "react";
import { BadUrl } from "../../../../components/PublicComponents/BadUrl";
import { ProductsContext } from "../../../../providers/ProductsContext";
import Item from "./Item/Item";

const ProductsItemsApp = (props) => {
  const params = props.match.params;
  const [checkData, setCheckData] = useState(false);
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);
  const res = [...data.items];

  useEffect(() => {
    const [resultCategory] = res.filter(
      (item) => item.category === params.category
    );
    const [resultId] = resultCategory.Products.filter(
      (item) => item.id == params.id
    );

    if (resultCategory && resultId) {
      setCheckData(true);
    }

    requestDataHandler(resultId);
  }, []);

  return (
    <>
      {requestData.id && (
        <Item
          data={data}
          category={params.category}
          requestData={requestData}
        />
      )}
    </>
  );
};

export default ProductsItemsApp;
