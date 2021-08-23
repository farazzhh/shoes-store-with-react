import React, { useContext, useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.css";
import { BackButtonPublic } from "../../../../../components/PublicComponents/BackButton/BackButton.jsx";
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

  const imges = [];
  const [selectSize, setSelectSize] = useState("");
  useEffect(() => {
    requestData.images.map((img) => {
      imges.push({
        original: `${process.env.PUBLIC_URL}${img}`,
        thumbnail: `${process.env.PUBLIC_URL}${img}`,
      });
    });
  });

  const addToCartHandler = () => {
    const newItem = {
      ...requestData,
      size: selectSize,
      category: category,
    };
    pushToCart(newItem);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      {requestData.id && (
        <ItemSection>
          <BackButtonPublic />
          <ItemWrapper>
            <ItemImageGallery>
              <ImageGallery items={imges} showNav={false} />
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
              {selectSize ? (
                <ItemAddToCartBtn
                  type="submit"
                  name="submit"
                  value="Add to Card"
                  onClick={addToCartHandler}
                />
              ) : (
                <ItemAddToCartBtn
                  type="submit"
                  name="submit"
                  value="Add to Card"
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
