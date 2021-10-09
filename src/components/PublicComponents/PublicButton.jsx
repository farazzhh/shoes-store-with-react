import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const PublicButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PublicLink = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ transparency }) => (transparency ? "#870a30" : "#fff")};
  margin: ${({ margin }) => (margin ? "0 auto 20px auto" : null)};
  padding: 10px 15px;
  width: ${({ width }) => (width ? `${width}` : null)};
  background: ${({ transparency }) => (!transparency ? "#870a30" : "#fff")};
  text-align: center;
  font-size: 15px;
  border-radius: 5px;
  border: #870a30 1px solid;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 5px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  cursor: pointer;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  z-index: 10;
  &:hover {
    background: ${({ transparency }) => (transparency ? "#870a30" : "#fff")};
    color: ${({ transparency }) => (!transparency ? "#870a30" : "#fff")};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    max-width: 80%;
    font-size: 12px;
  }
  span {
    font-size: 20px;
    font-weight: 400;
    span {
      font-size: 13px;
    }
  }
`;
