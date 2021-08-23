import React, { useEffect, useContext } from "react";
import {
  PIP,
  PIPItemsWrapper,
  PIPItemsItem,
  ItemsWrapper,
  ItemsImage,
  ItemsContent,
  ItemsName,
  ItemsPrice,
} from "./ProductItemsPageElement";
import { BackButtonPublic } from "../../../components/PublicComponents/BackButton/BackButton";
import { ProductsContext } from "../../../providers/ProductsContext";
import { Link } from "react-router-dom";

const ProductItemsPage = ({ props }) => {
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);

  const clickHandler = (item) => {
    requestDataHandler(item);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {requestData.Products && (
        <PIP id={requestData.category}>
          <BackButtonPublic />
          <PIPItemsWrapper>
            <PIPItemsItem>
              {requestData.Products.map((item, index) => (
                <Link
                  key={index}
                  onClick={() => clickHandler(item)}
                  to={{
                    pathname: requestData.category + "/" + item.id,
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
