import React, { useContext, useState, useEffect } from "react";
import { BackButtonPublic } from "../../components/PublicComponents/BackButton/BackButton";
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
  CartItemImg,
  CardItemDeleteButton,
  CartContent,
  CardSummary,
} from "./CartElement";

const Cart = () => {
  const [cart, pushToCart, removeItemFromCart] = useContext(CartContext);
  let sum = 0;
  let cartEmpty = true;

  if (cart) {
    cart.map((item) => {
      sum += parseFloat(item.price);
    })
    cartEmpty = false;
  } else {
    cartEmpty = true;
  }
  
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  return (
    <CartSection>
      <BackgroundPng
        src="./assets/images/png/cartBgpng.png"
        width="30%"
        top={false}
        left={false}
        opacity={0.1}
        flipH={true}
      />
      <BackgroundPng
        src="./assets/images/png/shoebox.png"
        width="30%"
        top={true}
        left={true}
        opacity={0.1}
        flipH={false}
      />

      <BackButtonPublic />
      <CartWrapper>
        <CartItemsWrapper>
          <CartItemsTitle>You have {cart.length} items in Cart</CartItemsTitle>
          <CardItems>
            {cart.map((item, index) => (
              <CardItem>
                <CartItemImg src={`${process.env.PUBLIC_URL}${item.images[0]}`} alt={item.name} />
                <CartContent>
                  <CardItemSpan>{item.name}</CardItemSpan>
                  <CardItemSpan>size : {item.size}</CardItemSpan>
                  <CardItemSpan>Qty : 1</CardItemSpan>
                  <CardItemSpan>price: {item.price}</CardItemSpan>
                </CartContent>
                <CardItemDeleteButton onClick={() => removeItemFromCart(index)}>
                  X
                </CardItemDeleteButton>
              </CardItem>
            ))}
          </CardItems>
        </CartItemsWrapper>
        <div>
          <CartItemsTitle>Cart Summary</CartItemsTitle>
          <CardSummary>
            <CardItemSpan>total numbers: {cart.length}</CardItemSpan>
            <CardItemSpan>total Cost : {sum}$</CardItemSpan>
          </CardSummary>
        </div>
      </CartWrapper>
    </CartSection>
  );
};

export default Cart;
