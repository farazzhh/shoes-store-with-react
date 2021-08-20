import styled from "styled-components";

export const BorderBottom = styled.div`
  height: ${({ height }) => (height ? height : `3px`)};
  width: 100%;
  background-color: ${({ color }) => (color ? color : `#870a30`)};
  box-shadow: 0px 1px 5px ${({ color }) => (color ? `#fff` : `rgba(0, 0, 0, 0.3)`)};
  border-radius: 2px;
  filter: blur(0.6px);
  ${({ opacity }) => (opacity ? `opacity : ${opacity};` : null)};
`;
