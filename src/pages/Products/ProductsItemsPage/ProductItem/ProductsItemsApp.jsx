import React, { useContext, useEffect, useState } from "react";
import { BadUrl } from "../../../../components/PublicComponents/BadUrl";
import { ProductsContext } from "../../../../providers/ProductsContext";
import Item from "./Item/Item";

const ProductsItemsApp = (props) => {
  const params = props.match.params;
  const [checkData, setCheckData] = useState(false);
  const [data, dataHandler, requestData, requestDataHandler] =useContext(ProductsContext);
  
  const res = [...data.items];


  useEffect(() => {
  // filter the Category in params
  const [resultCategory] = res.filter(
    (item) => item.category === params.category
  );
    
    // filter the items with Category in params
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
    {/* send result to item components for rendering */}
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
