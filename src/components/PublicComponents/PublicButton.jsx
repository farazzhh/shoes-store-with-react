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
  text-transform: capitalize;
  color: ${({ transparency }) => (transparency ? "#870a30" : "#fff")};
  margin: ${({ margin }) => (margin ? "0 auto 20px auto" : null)};

  padding: 10px 5px;
  width: ${({ width }) => (width ? `${width}` : null)};
  ${({ transparency }) =>
    !transparency ? "background:  rgba(255, 105, 180, 1)" : "background:#fff;"};
  text-align: center;
  font-size: 15px;
  border-radius: 5px;
  border: #870a30 1px solid;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 5px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.1s;
  -webkit-transition: all 0.1s;
  cursor: pointer;
  font-weight: 600;
  z-index: 10;
  &:hover {
    background: #870a30;
    color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    opacity: 1;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    max-width: 80%;
    font-size: 12px;
  }
`;