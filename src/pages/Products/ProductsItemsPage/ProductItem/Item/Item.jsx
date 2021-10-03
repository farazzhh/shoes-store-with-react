import React, { useContext, useState, useEffect, useMemo } from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/scss/image-gallery.css";
import { BackButtonPublic } from "../../../../../components/PublicComponents/BackButton.jsx";
import { CartContext } from "../../../../../providers/CartContext.js";
import {
  ItemSection,
  ItemWrapper,
  ItemImageGallery,
  ItemContent,
  ItemTitlePriceWrapper,
  ItemTitle,
  ItemPrice,
  ItemSizesWrapper,
  ItemSizeInputLabelWrapper,
  ItemSizeInputLabel,
  ItemSizeInput,
  ItemSizeLabel,
  ItemAddToCartBtn,
  ItemDescribe,
} from "./ItemElement";

const Item = ({ data, category, requestData }) => {
  const [cart, pushToCart] = useContext(CartContext);
  const [imges, setImges] = useState([]);
  const [selectSize, setSelectSize] = useState("");
  
  // put process.env.PUBLIC_URL befor image adress
  const fixImagesPath = useMemo(() => {
    const imgCopy = [];
    requestData.images.map((img) => {    
      imgCopy.push({
        original: `${process.env.PUBLIC_URL}${img}`,
        thumbnail: `${process.env.PUBLIC_URL}${img}`,
      });
    });
    return setImges(imgCopy);
  }, [requestData.images]);
  
  
  // make object with all item property plus selected size and item's category
  const addToCartHandler = () => {
    const newItem = {
      ...requestData,
      size: selectSize,
      category: category,
    };
    pushToCart(newItem);
  };

  // this useEffect is for go to top of the page when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {requestData.id && (
        <ItemSection>
          <BackButtonPublic />
          <ItemWrapper>
            <ItemImageGallery>
              {/* <ImageGallery items={imges} showNav={false} /> */}
            </ItemImageGallery>
            <ItemContent>
              <ItemTitlePriceWrapper>
                <ItemTitle>{requestData.name}</ItemTitle>
                <ItemPrice>
                  Price : <strong>{requestData.price}</strong>
                </ItemPrice>
              </ItemTitlePriceWrapper>
              <ItemSizesWrapper>
                <span>Select Size :</span>

                <ItemSizeInputLabelWrapper>
                  {/* this map is for render available sizes */}
                  {requestData.sizes.map((size, index) => (
                    <ItemSizeInputLabel key={index}>
                      <ItemSizeInput
                        type="radio"
                        id={index}
                        name="ItemSize"
                        value={size}
                      />
                      <ItemSizeLabel
                        htmlFor={index}
                        onClick={() => setSelectSize(size)}
                      >
                        {size}
                      </ItemSizeLabel>
                    </ItemSizeInputLabel>
                  ))}
                </ItemSizeInputLabelWrapper>
              </ItemSizesWrapper>

              {/* this condition is for disbaling add to cart button befor selecting size */}
              {selectSize ? (
                <ItemAddToCartBtn
                  type="submit"
                  name="submit"
                  value="Add to Cart"
                  onClick={addToCartHandler}
                />
              ) : (
                <ItemAddToCartBtn
                  type="submit"
                  name="submit"
                  value="Add to Cart"
                  disabled
                />
              )}
              <span>
                <strong>Describtion:</strong>
                <ItemDescribe>{requestData.describe}</ItemDescribe>
              </span>
            </ItemContent>
          </ItemWrapper>
        </ItemSection>
      )}
    </>
  );
};

export default Item;
