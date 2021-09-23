import styled from "styled-components";
import { Link } from "react-router-dom";

export const SubMenuList = styled.ul`
  height: 0;
  opacity: 0;
  background-color: #fff;
  border: 1px solid lightgray;
  width: 150px;
  position: absolute;
  top: 30px;
  left: -27px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const SubMenuListItem = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 12px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  width: 100%;
  text-align: center;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  border-bottom: lightgray 1px solid;
  text-transform: capitalize;
  :hover {
    background: -webkit-linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1),
      rgba(135, 10, 47, 0.2),
      rgba(255, 255, 255, 0.1)
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1),
      rgba(135, 10, 47, 0.2),
      rgba(255, 255, 255, 0.1)
    ); /* Opera 11.10+ */
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1),
      rgba(135, 10, 47, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    letter-spacing: 2px;
  }
`;
