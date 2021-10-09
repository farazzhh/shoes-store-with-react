import styled from "styled-components";
import { FontAwesomeIcon as icon } from "@fortawesome/react-fontawesome";

export const HeaderSection = styled.header`
  width: 100vw;
  height: calc(100vh - 90px);
  overflow: hidden;
  position: sticky;
  top: 80px;
  left: 0;
  right: 0;
`;

// this is for using image instead slideshow

export const HeroImage = styled.img`
  height: 100%;
  min-height: 600px;
  width: 100vw;
  object-fit: cover;
`;

export const SlideShowWrapper = styled.div`
  position: relative;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  height: 100%;
  & > div {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const HeroWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding: 40px;
  background: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const HeroTitle = styled.h1`
  justify-self: flex-start;
  border-radius: 10px;
  font-size: 80px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 45px;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
  }
`;

export const HeroDescribe = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  margin: 20px 0 140px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
    font-size: 18px;
    margin-bottom: 50px;
  }
`;

export const Icon = styled(icon)`
  font-size: 20px;
  display: ${({ hover }) => (hover ? "none" : "block")};
  width: 0;
  transition: all 0.3s ease-in-out;
  margin-left: 10px;
`;


export const LogButtons = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${({ transparency }) => (transparency ? "#870a30" : "#fff")};
  margin: ${({ margin }) => (margin ? "0 auto 20px auto" : null)};
  padding: 10px 5px;
  width: ${({ width }) => (width ? `${width}` : null)};
  ${({ transparency }) =>
    !transparency ? "background:  rgba(255, 105, 180, 1)" : "background:#fff;"};
  text-align: center;
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
