import React,{useEffect , useContext} from "react";
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
} from "../Products/ProductsElement";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
import { BGSection } from "../../components/PublicComponents/BGSection";
import { ProductsContext } from "../../providers/ProductsContext";
const Products = () => {
  const [data] = useContext(ProductsContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  return (
    <>
      {/* <ProductItemsPage /> */}
      <BGSection>
        <ProductsSection id="products">
          <BackgroundPng
            src={`${process.env.PUBLIC_URL}/assets/images/shoesprint2.png`}
            width="40%"
            top={true}
            left={false}
            opacity={0.2}
            flipH={false}
          />
          <ProductsWrapper>
            <ProductsContent>
              <ProductsTitle>Products List</ProductsTitle>
              <BorderBottom />
              <ProductsDescribe>choose your own Heart</ProductsDescribe>
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
