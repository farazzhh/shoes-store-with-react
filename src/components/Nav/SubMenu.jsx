import React from "react";
import { SubMenuList, SubMenuListItem } from "./SubMenuElement";

const SubMenuComponents = ({ menu, subMenu, subMenuHeight }) => {
  return (
    <SubMenuList height={subMenuHeight}>
      {subMenu.map((item, index) => (
        <SubMenuListItem key={index} to={`/${menu}${item.to}`}>
          {item.name}
        </SubMenuListItem>
      ))}
    </SubMenuList>
  );
};

export default SubMenuComponents;
