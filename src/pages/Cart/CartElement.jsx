import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartSection = styled.section`
  width: 100%;
  min-width: 100vw;
  position: relative;
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
  position: relative;
  max-width: 900px;
  width: 80%;
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
  
  @media all and (max-width: 768px) {
    width: 95%;
    padding: 20px;
  }
`;

export const CartItemsWrapper = styled.div`
  z-index: 1;
  p {
    margin-bottom: 10px;
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
  font-weight: 400;
  margin-bottom: 10px;
  span{
    text-decoration: underline;
    font-weight: 500;
  }
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
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
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
  font-weight: 400;
  width: 150px;
  font-size: 15px;
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
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
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
  font-weight: 900;
  background-color: rgba(135, 10, 47, 0.5);
  color: white;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    background-color: #870a30;
    border-radius: 50%;
  }
`;
//  CartSection,
//   CartWrapper,
//   CartItemsWrapper,
//   CartItemsNumber,
//   CardItems,
//   CardItem,
