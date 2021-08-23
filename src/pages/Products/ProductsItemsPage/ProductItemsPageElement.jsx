import styled from "styled-components";
import { Link } from "react-router-dom";

export const PIP = styled.section`
  padding: 50px 0 100px 0;
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background: lightgray;
`;

export const PIPItemsWrapper = styled.div`
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.5);
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  padding: 80px 0;
  border-radius: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const PIPItemsItem = styled(Link)`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1200px;
  justify-content: center;
  grid-row-gap: 50px;
  grid-column-gap: 2%;

  @media all and (max-width: 480px) {
    grid-row-gap: 20px;
  }
`;

export const ItemsWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-in;
  :hover {
    box-shadow: 1px 6px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
export const ItemsImage = styled.img`
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center center;
  border-bottom: 2px solid #870a30;
`;
export const ItemsContent = styled.div`
  padding: 5px 10px;
`;
export const ItemsName = styled.span``;
export const ItemsPrice = styled.h4``;
