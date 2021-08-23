import React, { useEffect, useRef, useState } from "react";
import { MobileMenuContext } from "../../providers/MobileMenuContext";
import {
  SideBarContainer,
  SelectionDiv,
  Icon,
  CloseIcon,
  SideBarMenuWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SideBarProductsElement";
const SideBarProducts = () => {
  const [toggle, setToggle] = useState(false);
  const [selectInputSort, seSelectInputSort] = useState(["A-Z", "Z-A"]);
  const [selectInputStatus, seSelectInputStatus] = useState(false);
  const selectInputRef = useRef(null);
  const optionSelectRef1 = useRef(null);
  const optionSelectRef2 = useRef(null);

  const inputClickHandler = (e) => {
    if (e === "price") {
      seSelectInputSort(["Low to High", "High to Low"]);
    } else {
      seSelectInputSort(["A-Z", "Z-A"]);
    }
  };
  return (
    <>
      <SideBarContainer toggle={toggle}>
        <Icon onClick={() => setToggle(!toggle)} toggle={toggle}>
          <span>Sort</span>
          <CloseIcon
            src={`${process.env.PUBLIC_URL}/assets/images/png/arrow.png`}
            toggle={toggle}
          />
        </Icon>
        <SideBarMenuWrapper>
          <SideBarMenu toggle={toggle}>
            <label>Sort By:</label>
            <div onClick={() => inputClickHandler("name")}>
              <input
                type="radio"
                id="name"
                name="ItemSize"
                value="name"
                defaultChecked
              />
              <label htmlFor="name">Name</label>
            </div>
            <div onClick={() => inputClickHandler("price")}>
              <input type="radio" id="price" name="ItemSize" value="price" />
              <label htmlFor="price">Price</label>
            </div>
            <br />
            <SelectionDiv>
              <select ref={selectInputRef} name="priceSort" id="priceSort">
                <option ref={optionSelectRef1} value="highlow">
                  {selectInputSort[0]}
                </option>
                <option ref={optionSelectRef2} value="lowhigh">
                  {selectInputSort[1]}
                </option>
              </select>
            </SelectionDiv>
            <button>OK</button>
          </SideBarMenu>
        </SideBarMenuWrapper>
        {/* </SideBarWrapper> */}
      </SideBarContainer>
    </>
  );
};

export default SideBarProducts;
