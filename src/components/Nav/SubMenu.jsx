import React, { useState } from "react";
import { SubMenuList, SubMenuListItem } from "./SubMenuElement";

const SubMenu = ({ menu, subMenu, subMenuHeight }) => {
  return (
    <SubMenuList height={subMenuHeight}>
      {subMenu.map((item) => (
        <SubMenuListItem to={`/${menu}${item.to}`}>{item.name}</SubMenuListItem>
      ))}
    </SubMenuList>
  );
};

export default SubMenu;
