import React,{useEffect,useContext,useRef} from "react";
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
import PublicHeader from "../../components/PublicComponents/PublicHeader/PublicHeader";
import { ProductsContext  } from "../../providers/ProductsContext";

const Products = () => {
const [data, dataHandler, requestData, requestDataHandler] = useContext(ProductsContext);
 const inputRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    
     window.addEventListener("scroll", function (e) {
       if (inputRef.current !== null) {
         if (window.scrollY > inputRef.current.offsetHeight + 80) {
           // class width-0 made in App.css
           inputRef.current.classList.add("width-0");
         } else {
           inputRef.current.classList.remove("width-0");

         }
       }
     });
    
}, [data]);
  
  return (
    <>
      {/* <ProductItemsPage /> */}
      <BGSection>
        {/* products parallex hero header from public components */}
        <PublicHeader
          title="Style"
          video={`${process.env.PUBLIC_URL}/assets/videos/sneackers header web.mp4`}
          ref={inputRef}
        />

        <ProductsSection id="products">
          <BackgroundPng
            src={`${process.env.PUBLIC_URL}/assets/images/shoesprint2.png`}
            alt="logo"
            width="30%"
            top={true}
            left={false}
            opacity={0.3}
            flipH={true}
          />
          <BackgroundPng
            src={`${process.env.PUBLIC_URL}/assets/images/shoesprint2.png`}
            alt="logo"
            width="40%"
            top={false}
            left={true}
            opacity={0.1}
            flipH={true}
          />
          <ProductsWrapper>
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
