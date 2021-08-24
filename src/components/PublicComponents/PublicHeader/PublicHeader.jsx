import React, { useRef, useState, useEffect } from "react";
import { BorderBottom } from "../BorderBottom";
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
  
  return (
    <PIPHeader>
      <div >
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
        <PIPTitleWrapper>
          <PIPTitle>
            {title}
            <BorderBottom />
          </PIPTitle>
          <PIPDescribe>{describe}</PIPDescribe>
        </PIPTitleWrapper>
      </PIPHeroWrapper>
    </PIPHeader>
  );
};

export default PublicHeader;
