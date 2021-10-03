import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ProductsSection = styled.section`
  width: 100vw;
  height: auto;
  padding: 200px 0 250px 0;
  position: relative;
  overflow: hidden;
  background: rgba(101, 1, 31, 0.7);
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.3) -1px 1px 10px;
`;

export const ProductsWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  padding: 50px 10px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgb(250, 250, 250);
  border-radius: 10px;
  border-left: #870a30 1px solid;
  border-bottom: #870a30 3px solid;

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 50px 5px;
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
  font-weight: 400;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  color: #000;
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
  color: gray;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
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
  background: #ffffff;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  list-style: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;
  -webkit-transition: all 0.15s ease-in-out;
  backface-visibility: hidden;
  border-bottom: #870a30 2px solid;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: translateY(-1px);
    span {
      color: #fff;
      font-weight: 300;
    }
    div::after {
      opacity: 0.4;
    }
  }

  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const ProductsItemsImage = styled.div`
  width: 100%;
  position: relative;
  &:after {
    transition: all 0.1s ease-in-out;
    -webkit-transition: all 0.1s ease-in-out;
    content: "";
    border-radius: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    &:after {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const ProductsImage = styled.img`
  width: 100%;
  vertical-align: top;
  object-fit: cover;
  object-position: center center;
`;

export const ProductsItemsTitle = styled.span`
  font-size: 25px;
  position: absolute;
  font-weight: 500;
  margin: 5px 0 10px 0;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  letter-spacing: -0.5px;
  transition: all 0.1s;
  -webkit-transition: all 0.1s;
  color: lightgray;

  @media screen and (max-width: 768px) {
    color: #fff;
    text-shadow: 0 0 3px #000;
    font-weight: 700;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
