import styled from "styled-components";



export const BackgroundPng = styled.img`
  position: absolute;
  max-width: 90vw;
  ${({ width }) => (width ? `width: ${width};` : null)};
  ${({ left }) => (left ? "left: -50px;" : "right: -50px;")};
  ${({ top }) => (top ? "top: -50px;" : "bottom: -50px;")};
  transform: ${({ flipH }) => (flipH ? `-webkit-scaleX(-1)` : null)};
  transform: ${({ flipH }) => (flipH ? `scaleX(-1)` : "")};
  opacity: ${({ opacity }) => (opacity ? `${Number(opacity)}` : null)};
  object-fit: cover;
  max-height: 100%;
  @media all and (max-width: 768px) {
    ${({ mobileWidth }) => (mobileWidth ? `width: ${mobileWidth};` : null)};

    ${({ left }) => (left ? "left: -5px;" : "right: -5px;")};
    ${({ top }) => (top ? "top: -30px;" : "bottom: -30px;")};
  }
`;
