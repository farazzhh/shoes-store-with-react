import React, { useEffect, useContext, useState } from "react";
import {
  PIP,
  PIPItemsWrapper,
  PIPTitle,
  PIPItemsItem,
  ItemsWrapper,
  ItemsImage,
  ItemsContent,
  ItemsName,
  ItemsPrice,
} from "./ProductItemsPageElement";
import { ProductsContext } from "../../../providers/ProductsContext";
import { BorderBottom } from "../../../components/PublicComponents/BorderBottom";
import { Link } from "react-router-dom";
import SideBarProducts from "../../../components/SideBarProducts/SideBarProducts";

const ProductItemsPage = ({ props }) => {
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);
  const [itemsPageData, setItemsPageData] = useState(requestData);
  const clickHandler = (item) => {
    requestDataHandler(item);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
      if (requestData) {
        setItemsPageData(requestData);
      }
  });
  

  return (
    <>
      {itemsPageData.Products && (
        <PIP id={itemsPageData.category}>
          <PIPItemsWrapper>
            <PIPTitle>{itemsPageData.category}
            <BorderBottom width="300px" margin="20px auto"/>
            </PIPTitle>
            <SideBarProducts
              itemsPageData={itemsPageData}
              setItemsPageData={setItemsPageData}
            />
            <PIPItemsItem>
              {itemsPageData.Products.map((item, index) => (
                <Link
                  key={index}
                  onClick={() => clickHandler(item)}
                  to={{
                    pathname: itemsPageData.category + "/" + item.id,
                    query: { item },
                  }}
                >
                  <ItemsWrapper>
                    <ItemsImage
                      src={`${process.env.PUBLIC_URL}${item.images[0]}`}
                      alt={item.name}
                    />
                    <ItemsContent>
                      <ItemsName>{item.name}</ItemsName>
                      <ItemsPrice>{item.price}</ItemsPrice>
                    </ItemsContent>
                  </ItemsWrapper>
                </Link>
              ))}
            </PIPItemsItem>
          </PIPItemsWrapper>
        </PIP>
      )}
      {}
    </>
  );
};

export default ProductItemsPage;
