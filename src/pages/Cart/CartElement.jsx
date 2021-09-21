import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartSection = styled.section`
  width: 100%;
  min-width: 100vw;
  position: relative;
  height: 100%;
  min-height: calc(100vh - 80px);
  padding: 100px 10px;
  position: relative;
  background: rgb(211, 208, 208);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    padding: 30px 10px;
  }
`;

export const CartWrapper = styled.div`
  position: relative;
  width: 900px;
  margin: 0 auto;
  padding: 30px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  overflow: hidden;
  background: rgb(255, 255, 250);
  box-shadow: rgba(0, 0, 0, 0.4) -1px 2px 35px;
  border-radius: 10px;
  border-bottom: #870a30 1px solid;
  border-left: #870a30 1px solid;
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  @media all and (max-width: 1000px) {
    padding: 20px;
    width: 750px;
  }
  @media all and (max-width: 768px) {
    width: 550px;
    padding: 20px;
  }
  @media all and (max-width: 580px) {
    width: 400px;
    padding: 20px;
  }
  
`;

export const CartItemsWrapper = styled.div`
  z-index: 1;
  @media all and (max-width: 480px) {
    p {
      font-size: 14px;
    }
  }
  p {
    text-transform: capitalize;
    a {
      color: #870a30;
      text-decoration: underline;
      font-weight: 500;
      :hover {
        color: #9b143c;
      }
    }
  }
`;

export const CartItemsTitle = styled.h4`
  font-weight: 400;
  span {
    text-decoration: underline;
    font-weight: 500;
  }
  @media all and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const CardItems = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 5px;
  row-gap: 20px;
`;

export const CardItem = styled.div`
  position: relative;
  width: 150px;
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);

  @media screen and (max-width: 580px) {
    width: 100%;
    height: 95px;
    padding: 10px;
    flex-direction: row;
    justify-items: center;
  }
  .borderBottom {
    display: block;
    width: 100px;
    height: 2px;
    background-color: lightgray;
    margin: 5px 0;
    @media screen and (max-width: 580px) {
      display: none;
    }
  }
`;

export const CartContent = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-transform: capitalize;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 480px) {
    column-gap: 10px;
  }
`;

export const CardItemSpan = styled.span`
  font-size: 14px;
  color: gray;
  text-shadow: rgba(0, 0, 0, 0.2) 0 2px 3px;
  text-align: center;
font-weight: 500;
`;

export const CardSummary = styled.div`
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  column-gap: 100px;
  align-items: center;
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
`;

//its contains a image and the name of product in cart item 
export const CardItemLink = styled(Link)`
:first-of-type{
  height: 80px;
}
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #000;
    font-size: 15px;
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
    margin-top: 5px;
    text-transform: capitalize;
    @media screen and (max-width: 580px) {
     font-size: 14px;
     margin: 0;
    }
  }
  :hover {
    color: #870a30;
  }
`;

export const CartItemImg = styled.img`
  height: 90%;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 580px) {
   height: 80%;
   margin-right: 5px;
  }
`;

export const CardItemDeleteButton = styled.button`
  border: 1px solid #870a30;
  width: 25px;
  height: 25px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 2px;
  top: 2px;
  font-weight: 900;
  color: #870a30;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #870a30;
    border-radius: 50%;
  }
  @media screen and (max-width: 380px) {
    width: 20px;
    height: 20px;
  }
  svg {
    font-size: 15px;
    @media screen and (max-width: 380px) {
    font-size: 13px;
  }
  }
`;
//  CartSection,
//   CartWrapper,
//   CartItemsWrapper,
//   CartItemsNumber,
//   CardItems,
//   CardItem,
