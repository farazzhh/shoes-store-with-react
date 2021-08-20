import styled from "styled-components";

export const CartSection = styled.section`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: calc(100vh - 80px);
  padding: 50px 0;
  position: relative;
  background: linear-gradient(
    to left bottom,
    rgba(242, 197, 224, 1),
    rgb(255, 255, 255),
    rgb(255, 255, 255),
    rgba(242, 197, 224, 1)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const CartWrapper = styled.div`
  max-width: 900px;
  width: 80%;
  margin: 0 auto;
  padding: 15px;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px,
    rgba(0, 0, 0, 0.2) 0px 7px 13px -3px;
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
font-weight:500;
`;

export const CardItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  border: 0.5px solid lightgray;
`;

export const CardItem = styled.div`
  width: 100%;
  height: 80px;
  padding: 5px;
  display: flex;
  /* flex-wrap: nowrap; */
  align-items: center;
  justify-content: space-around;
  border: 0.5px solid lightgray;
`;

export const CartContent = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  width: 100%;
  justify-content: space-around;
`;

export const CardItemSpan = styled.span`
  font-weight: 300;
`;

export const CardSummary = styled.div`
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 100px;
  align-items: center;
  border: 2px solid lightgray;
`;

export const CartItemImg = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const CardItemDeleteButton = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  background-color: rgba(135, 10, 47, 0.5);
  color: white;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
  margin-right: 5px;
  :hover{
    background-color: #870a30;
  }
`;
//  CartSection,
//   CartWrapper,
//   CartItemsWrapper,
//   CartItemsNumber,
//   CardItems,
//   CardItem,
