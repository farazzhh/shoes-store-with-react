import React, { useContext, useEffect } from "react";
import { BackButtonPublic } from "../../components/PublicComponents/BackButton";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng";
import { CartContext } from "../../providers/CartContext";
import {
  CartSection,
  CartWrapper,
  CartItemsWrapper,
  CartItemsTitle,
  CardItems,
  CardItem,
  CardItemSpan,
  CardItemLink,
  CartItemImg,
  CardItemDeleteButton,
  CartContent,
  CardSummary,
} from "./CartElement";

const Cart = () => {
  const [cartData, pushToCart, removeItemFromCart] = useContext(CartContext);
  let sum = 0;

    if (cartData) {
      cartData.map((item) => {
        sum += parseFloat(item.price);
      });
    }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CartSection>
      <BackButtonPublic />
      <BackgroundPng
        src={`${process.env.PUBLIC_URL}/assets/images/png/cartBG.png`}
        width="50%"
        top={false}
        left={false}
        opacity={0.07}
        flipH={true}
      />
      <CartWrapper>
        <BackgroundPng
          src={`${process.env.PUBLIC_URL}/assets/images/png/shoebox.png`}
          width="100%"
          top={true}
          left={true}
          opacity={0.05}
          flipH={false}
        />

        <CartItemsWrapper>
          <CartItemsTitle>
            You have {cartData && cartData.length} items in your Cart
          </CartItemsTitle>
          <CardItems>
            {cartData &&
              cartData.map((item, index) => (
                <CardItem key={index}>
                  <CardItemLink to={`/Products/${item.category}/${item.id}`}>
                    <CartItemImg
                      src={`${process.env.PUBLIC_URL}${item.images[0]}`}
                      alt={item.name}
                    />
                  </CardItemLink>
                  <CartContent>
                    <CardItemSpan>
                      <CardItemLink
                        to={`/Products/${item.category}/${item.id}`}
                      >
                        {item.name}{" "}
                      </CardItemLink>
                    </CardItemSpan>
                    <CardItemSpan>size : {item.size}</CardItemSpan>
                    <CardItemSpan>Qty : 1</CardItemSpan>
                    <CardItemSpan>price: {item.price}</CardItemSpan>
                  </CartContent>
                  <CardItemDeleteButton
                    onClick={() => removeItemFromCart(index)}
                  >
                    X
                  </CardItemDeleteButton>
                </CardItem>
              ))}
          </CardItems>
        </CartItemsWrapper>
        <div>
          <CartItemsTitle>Cart Summary</CartItemsTitle>
          <CardSummary>
            <CardItemSpan>
              Total Numbers: {cartData && cartData.length}
            </CardItemSpan>
            <CardItemSpan>Total Cost : {sum}$</CardItemSpan>
            <CardItemSpan>Your Credit : {sum}$</CardItemSpan>
          </CardSummary>
        </div>
      </CartWrapper>
    </CartSection>
  );
};

export default Cart;
