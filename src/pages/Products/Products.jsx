import React, { useEffect, useContext, useRef, useReducer } from "react";
import {
  ProductsSection,
  ProductsWrapper,
  ProductsContent,
  ProductsDescribe,
  ProductsTitle,
  ProductsMenuItems,
  ProductsItemsImage,
  ProductsItems,
  ProductsImage,
  ProductsItemsTitle,
} from "./ProductsElement";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
import { BGSection } from "../../components/PublicComponents/BGSection";
import PublicHeader from "../../components/PublicComponents/PublicHeader";
import { ProductsContext } from "../../providers/ProductsContext";

const Products = () => {
  const [data, dataHandler, requestData, requestDataHandler] =
    useContext(ProductsContext);

  const inputRef = useRef(null);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    forceUpdate();
  }, []);

  return (
    <>
      {/* <ProductItemsPage /> */}
      <BGSection>
        {/* products parallex hero header from public components */}
        <PublicHeader
          title="Style"
          type="image"
          src={`${process.env.PUBLIC_URL}/assets/images/shoe16 web.jpg`}
        />
        <ProductsSection id="products">
          <ProductsWrapper>
            <BackgroundPng
              src={`${process.env.PUBLIC_URL}/assets/images/shoesprint2.png`}
              alt="logo"
              width="20%"
              top={false}
              left={true}
              opacity={0.3}
              flipH={true}
            />
            <BackgroundPng
              src={`${process.env.PUBLIC_URL}/assets/images/shoesprint2.png`}
              alt="logo"
              width="30%"
              top={true}
              left={false}
              opacity={0.3}
              flipH={false}
            />
            <ProductsContent>
              <ProductsTitle>Products List</ProductsTitle>
              <BorderBottom />
              <ProductsDescribe>Choose Your Style</ProductsDescribe>
            </ProductsContent>
            <ProductsMenuItems>
              {data.items.map((item, index) => (
                <ProductsItems
                  key={index}
                  to={{ pathname: `/Products/${item.category}` }}
                >
                  <ProductsItemsImage>
                    <ProductsImage
                      src={`${process.env.PUBLIC_URL}${item.img}`}
                    />
                  </ProductsItemsImage>
                  <ProductsItemsTitle>{item.category}</ProductsItemsTitle>
                </ProductsItems>
              ))}
            </ProductsMenuItems>
          </ProductsWrapper>
        </ProductsSection>
      </BGSection>
    </>
  );
};

export default Products;
