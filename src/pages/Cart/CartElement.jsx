import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartSection = styled.section`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: calc(100vh - 80px);
  padding: 100px 0;
  position: relative;
  background: rgb(211, 208, 208);
  display: flex;
  align-items: center;
  justify-content: center;
overflow: hidden;
  @media screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;


export const CartWrapper = styled.div`
  max-width: 900px;
  width: 80%;
  margin: 0 auto;
  padding: 15px;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background: rgb(255, 255, 250);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 35px;
  border-radius: 10px;
  border-bottom: #870a30 1px solid;
  border-left: #870a30 1px solid;
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  @media all and (max-width: 480px) {
    width: 95%;
  }
`;

export const CartItemsWrapper = styled.div``;

export const CartItemsTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 20px;
`;

export const CardItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  row-gap: 10px;
  `;

export const CardItem = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  border: 1px solid lightgray;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.1);
  `;

export const CartContent = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  justify-content: space-around;
  align-items: center;

`;

export const CardItemSpan = styled.span`
  font-weight: 500;
  width: 150px;
  font-size: 16px;
  text-align: center;
  
  @media screen and (max-width: 320px) {
    width: 100px;
    font-size: 14px;
  }
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
  border: 1px solid lightgray;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.1);
`;

export const CardItemLink = styled(Link)`
  height: 80px;
  cursor: pointer;
  :hover {
    color: #870a30;
  }
`;

export const CartItemImg = styled.img`
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

export const CardItemDeleteButton = styled.button`
  border: none;
  width: 25px;
  height: 25px;
  font-weight: 900;
  background-color: rgba(135, 10, 47, 0.5);
  color: white;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    background-color: #870a30;
  }
`;
//  CartSection,
//   CartWrapper,
//   CartItemsWrapper,
//   CartItemsNumber,
//   CardItems,
//   CardItem,
