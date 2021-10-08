import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackButtonPublic } from "../../components/PublicComponents/BackButton";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng";
import { CartContext } from "../../providers/CartContext";
import { MdDelete } from "react-icons/md";
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
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const [cartData, pushToCart, removeItemFromCart] = useContext(CartContext);
  const{user, loginWithRedirect} = useAuth0()
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
        <CartItemsWrapper>
          {user ? (
            <p>dear {user.name} </p>
          ) : (
            <p>
              Please <a onClick={loginWithRedirect}>login</a> to continue
            </p>
          )}
          <CartItemsTitle>
            You have <span>{cartData && cartData.length}</span> items in your
            Cart
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
                  <CardItemLink to={`/Products/${item.category}/${item.id}`}>
                    <CardItemSpan>{item.name}</CardItemSpan>{" "}
                  </CardItemLink>
                  <span className="borderBottom"></span>
                  <CartContent>
                    <CardItemSpan>
                      size : <span>{item.size}</span>
                    </CardItemSpan>
                    <CardItemSpan>
                      price: <span>{item.price}</span>
                    </CardItemSpan>
                  </CartContent>
                  <CardItemDeleteButton
                    onClick={() => removeItemFromCart(index)}
                  >
                    <MdDelete />
                  </CardItemDeleteButton>
                </CardItem>
              ))}
          </CardItems>
        </CartItemsWrapper>
        <div>
          <CartItemsTitle>Cart Summary</CartItemsTitle>
          <CardSummary>
            <span>Total Numbers: {cartData && cartData.length}</span>
            <span>Total Cost : {sum}</span>
            <span>Your Credit : {sum}</span>
          </CardSummary>
        </div>
      </CartWrapper>
    </CartSection>
  );
};

export default Cart;
