import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ProductsSection = styled.section`
  width: 100vw;
  height: auto;
  padding: 200px 0;
  position: relative;
  overflow: hidden;
  background: rgb(255, 255, 255);


  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProductsWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(255, 105, 180,0.6);
  box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 4px;
  border-radius: 10px;
  border: #870a30 1px solid;
  border-bottom: #870a30 3px solid;
 
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 50px 10px;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    padding: 30px 10px;
  }
`;

export const ProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const ProductsTitle = styled.h1`
  font-size: 50px;
  font-weight: 900;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
  @media screen and (max-width: 480px) {
    font-size: 35px;
  }
  @media screen and (max-width: 328px) {
    font-size: 30px;
  }
`;
export const ProductsDescribe = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.8);
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 328px) {
    font-size: 14px;
  }
`;

export const ProductsMenuItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 15px;
  padding: 10px;
`;

export const ProductsItems = styled(LinkR)`
  width: 200px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  list-style: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  backface-visibility: hidden;
  border-bottom: #870a30 2px solid;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    span {
      letter-spacing: 2px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const ProductsItemsImage = styled.div`
  width: 100%;
`;

export const ProductsImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const ProductsItemsTitle = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin: 5px 0 10px 0;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 1);
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
