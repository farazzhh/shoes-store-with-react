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
  max-width: 90%;
  width: 1000px;
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
margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  border-radius: 5px;
  column-gap: 20px;
  row-gap: 20px;
  @media screen and (max-width: 480px){


    }
`;

export const CardItem = styled.div`
  position: relative;
  width: 150px;
  height: 210px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 90px;
    flex-direction: row;
    justify-items: center;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-transform: capitalize;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  @media screen and (max-width: 480px) {
  margin-top: 0px;
  }
`;

export const CardItemSpan = styled.span`
color: #000;
  font-weight: 500;
  width: 100%;
  font-size: 14px;
text-shadow: rgba(0, 0, 0, 0.2) 0 2px 3px;
  @media screen and (max-width: 480px) {
    width: 100px;
    font-size: 12px;
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
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
`;

export const CardItemDeleteButton = styled.button`
  border: 1px solid #870a30;
  width: 25px;
  height: 25px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -3px;
  top: -3px;
  font-weight: 900;
  color: #870a30;
  border-radius: 50%;
  /* margin-right: 10px; */
  cursor: pointer;
  :hover {
    color: white;
    background-color: #870a30;
    border-radius: 50%;
  }
  @media screen and (max-width: 480px) {
    /* width: 20px;
    height: 20px; */
  }
  svg {
    font-size: 17px;
  }
`;
//  CartSection,
//   CartWrapper,
//   CartItemsWrapper,
//   CartItemsNumber,
//   CardItems,
//   CardItem,
