import styled from "styled-components";
import {
  OpacityAnimate,
  OpacityLetterSpacing,
} from "../keyframes";

export const PIPHeader = styled.div`
  width: 100vw;
  overflow: hidden;
  position: sticky;
  top: 80px;
  left: 0;
  right: 0;
`;

export const PIPHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 768) {
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
`;

export const PIPHeroWrapperBG = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  animation: ${OpacityAnimate} 5s linear 6s forwards;
`;

export const PIPImage = styled.video`
  width: 100%;
  height: calc(100vh - 80px);
  object-fit: cover;
  object-position: center center;
`;

export const PIPTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  `;

export const PIPTitle = styled.h1`
  opacity: 0;
  color: #fff;
  font-size: 100px;
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: -20px;
  animation: ${OpacityAnimate} 6s linear 6s forwards,
    ${OpacityLetterSpacing} 7s linear 5s forwards;
`;

export const PIPDescribe = styled.p`
  color: #fff;
  opacity: 0;
  font-size: 35px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  letter-spacing: -5px;
  animation: ${OpacityAnimate} 2s linear 11s forwards;
`;
