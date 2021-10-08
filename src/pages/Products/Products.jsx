import React, { useEffect, useContext, useReducer } from "react";
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
import { DataContext } from "../../providers/DataContext";

const Products = () => {
  const [data, dataHandler, requestData, requestDataHandler] =  useContext(DataContext);

// add for issue when pages are open, the pages needs to refresh for working correctly the title's animation 
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

// for scrolling to top of page when pages loaded
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
          type="bg"
        />
        <ProductsSection id="products">
          <ProductsWrapper>

            {/* backgroundpng are the png transparet files in background  */}
            <BackgroundPng
              src={`${process.env.PUBLIC_URL}/assets/images/shoesprint2.png`}
              alt="logo"
              width="20%"
              top={false}
              left={true}
              opacity={0.3}
              flipH={false}
              mobileWidth="40%"
            />
            <BackgroundPng
              src={`${process.env.PUBLIC_URL}/assets/images/shoesprint2.png`}
              alt="logo"
              width="30%"
              top={true}
              left={false}
              opacity={0.3}
              flipH={true}
              mobileWidth="50%"
            />
            <ProductsContent>
              <ProductsTitle>Products List</ProductsTitle>
              <BorderBottom />
              <ProductsDescribe>Choose Your Style</ProductsDescribe>
            </ProductsContent>
            <ProductsMenuItems>

              {/* Listing category of products */}
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
