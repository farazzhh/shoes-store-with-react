import React from "react";
import { BackButton, BackButtonImg } from "./BackButtonElement";

export const BackButtonPublic = () => {

    
    const clickHandler = () => {
        return window.history.back();
    }
  return <BackButton onClick={clickHandler}>
    <BackButtonImg src={`${process.env.PUBLIC_URL}/assets/images/png/backpng.png`} alt="back button" />
  </BackButton>
};
