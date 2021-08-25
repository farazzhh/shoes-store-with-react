import React, { useReducer, useEffect } from "react";
import { BorderBottom } from "../BorderBottom";
import AOS from "aos";
import {
  PIPHeader,
  PIPHeroWrapper,
  PIPHeroWrapperBG,
  PIPVideo,
  PIPImage,
  PIPImageCover,
  PIPTitleWrapper,
  PIPTitle,
  PIPDescribe,
} from "./PublicHeaderElement.jsx";

const PublicHeader = ({ title, describe, type, src }) => {
  AOS.init({
    duration: 2000,
    delay:200,
  });
  
  useEffect(() => {

  }, []);
  return (
    <PIPHeader>
      <div>
        {type === "video" ? (
          <PIPVideo
            src={src}
            webkit-playsinline
            playsinline
            muted
            type="video/mp4"
          />
        ) : (
          <PIPImage src={src} alt="image header" />
        )}
      </div>
      <PIPImageCover />
      <PIPHeroWrapper>
        <PIPHeroWrapperBG />
        <PIPTitleWrapper data-aos="fade-up">
          <PIPTitle>
            {title}
            <BorderBottom height="5px" />
          </PIPTitle>
          <PIPDescribe>{describe}</PIPDescribe>
        </PIPTitleWrapper>
      </PIPHeroWrapper>
    </PIPHeader>
  );
};

export default PublicHeader;
