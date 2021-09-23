import React, { useRef, useState } from "react";
import { IoIosArrowDropdown as IconArrow } from "react-icons/io";
import {
  SideBarContainer,
  SelectionDiv,
  Icon,
  CloseIcon,
  SideBarMenuWrapper,
  SideBarMenu,
} from "./SideBarProductsElement";
const SideBarProducts = ({ itemsPageData, setItemsPageData }) => {
  const [toggle, setToggle] = useState(false);
  const [selectInputSort, seSelectInputSort] = useState(["A-Z", "Z-A"]);
  const selectInputRef = useRef(null);

  // select method of sort
  const inputClickHandler = (e) => {
    if (e === "price") {
      seSelectInputSort(["Low to High", "High to Low"]);
    } else {
      seSelectInputSort(["A-Z", "Z-A"]);
    }
  };

  // sort items
  const sortButtonHandler = () => {
    const selectedText =
      selectInputRef.current.options[selectInputRef.current.selectedIndex].text;
    const list = { ...itemsPageData };
    if (selectedText === "Low to High") {
      list.Products.sort((a, b) => (a.price > b.price ? 1 : -1));
      setItemsPageData(list);
    } else if (selectedText === "High to Low") {
      list.Products.sort((a, b) => (a.price < b.price ? 1 : -1));
      setItemsPageData(list);
    } else if (selectedText === "Z-A") {
      list.Products.sort((a, b) =>
        a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1
      );
      setItemsPageData(list);
    } else if (selectedText === "A-Z") {
      list.Products.sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      );
      setItemsPageData(list);
    }
    setToggle(!toggle);
  };

  return (
    <>
      <SideBarContainer toggle={toggle}>
        <Icon onClick={() => setToggle(!toggle)} toggle={toggle}>
          <span>Sort</span>
          <IconArrow
            // src={`${process.env.PUBLIC_URL}/assets/images/png/arrow.png`}
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
                <option value="highlow">{selectInputSort[0]}</option>
                <option value="lowhigh">{selectInputSort[1]}</option>
              </select>
            </SelectionDiv>
            <button onClick={sortButtonHandler}>OK</button>
          </SideBarMenu>
        </SideBarMenuWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBarProducts;
