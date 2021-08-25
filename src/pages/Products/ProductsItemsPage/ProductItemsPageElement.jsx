import styled from "styled-components";
import { Link } from "react-router-dom";

export const PIP = styled.section`
  /* padding: 50px 0 100px 0; */
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background: rgb(243, 230, 234);
`;

export const PIPItemsWrapper = styled.div`
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background: lightgray;
  max-width: 1300px;
  width: 95%;
  margin: 0 auto;
  padding: 80px 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const PIPTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
`;

export const PIPItemsItem = styled(Link)`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 95%;
  max-width: 1200px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  @media all and (max-width: 768px) {
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
`;

export const ItemsWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in;
  width: 200px;
  height: 270px;
  :hover {
    box-shadow: 1px 6px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 220px;
  }
  @media screen and (max-width: 480px) {
    width: 140px;
    height: 200px;
  }
`;
export const ItemsImage = styled.img`
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  object-position: center center;
  border-bottom: 2px solid #870a30;
  width: 100%;
  height: 75%;
  @media screen and (max-width: 768px) {
    height: 70%;
  }
`;

export const ItemsContent = styled.div`
  padding:0 5px;
`;

export const ItemsName = styled.span`
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ItemsPrice = styled.h5``;
