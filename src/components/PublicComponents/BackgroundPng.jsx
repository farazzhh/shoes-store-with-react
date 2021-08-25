import styled from "styled-components";



export const BackgroundPng = styled.img`
  position: absolute;
  max-width: 90vw;
  ${({ left }) => (left ? "left: -50px;" : "right: -50px;")};
  ${({ top }) => (top ? "top: -50px;" : "bottom: -50px;")};
  transform: ${({ flipH }) => (flipH ? `-webkit-scaleX(-1)` : null)};
  transform: ${({ flipH }) => (flipH ? `scaleX(-1)` : "")};
  opacity: ${({ opacity }) => (opacity ? `${Number(opacity)}` : null)};
  object-fit: contain;
  max-height: 100%;
  z-index: 10;
  @media all and (max-width: 480px) {
    width: 50%;
    ${({ left }) => (left ? "left: -5px;" : "right: -5px;")};
    ${({ top }) => (top ? "top: -70px;" : "bottom: -70px;")};
  }
`;
