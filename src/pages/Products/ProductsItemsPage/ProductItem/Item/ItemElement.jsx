import styled from "styled-components";

export const ItemSection = styled.section`
  position: relative;
  padding: 60px;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d3d3;
  @media screen and (max-width: 860px) {
    padding: 50px 5px;
    height: auto;
  }
`;

export const ItemWrapper = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  backdrop-filter: blur(5px);
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 3px 5px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 85%;
  }
  @media all and (min-height: 1000px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 85%;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
    display: block;
  }
`;

export const ItemImageGallery = styled.div`
  height: 100%;
  width: 100%;
`;
export const ItemContent = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const ItemTitlePriceWrapper = styled.div``;

export const ItemTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const ItemPrice = styled.span``;

export const ItemSizesWrapper = styled.div`
  width: 100%;
  margin: 35px 0;
`;

export const ItemSizeInputLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  grid-auto-rows: 1fr;
  margin-top: 15px;
`;

export const ItemSizeInputLabel = styled.div`
  position: relative;
  margin-left: 3px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #eee;
  border: 1px solid #870a30;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemSizeLabel = styled.label`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: rgb(242, 197, 224);
  }
`;

export const ItemSizeInput = styled.input`
  position: absolute;
  top: 0;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  :checked + ${ItemSizeLabel} {
    background-color: rgba(255, 105, 180, 0.5);
  }
`;

export const ItemAddToCartBtn = styled.input`
  margin: 20px auto;
  width: 100%;
  height: 50px;
  border: 2px solid #870a30;
  border-radius: 8px;
  font-weight: bold;
  background: rgba(255, 105, 180, 0.7);
  cursor: pointer;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  outline: none;
  :hover {
    background: rgba(255, 105, 180, 0.85);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    transform: translateY(1px);
  }
  :active {
    background: rgba(255, 105, 180, 1);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.7);
    transform: translateY(1.5px);
  }
  :disabled{
    background: #f9c3de;

  }
`;
export const ItemDescribe = styled.p`
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
//  ItemSection,
//   ItemWrapper,
//   ItemTitle,
//   ItemImageGallery,
//      ItemPrice,
