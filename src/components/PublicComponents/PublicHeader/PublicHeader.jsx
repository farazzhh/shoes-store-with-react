import React, {  useEffect } from "react";
import { BorderBottom } from "../BorderBottom";
import AOS from "aos";
import {
  PIPHeader,
  PIPHeroWrapper,
  PIPHeroWrapperBG,
  PIPVideo,
  PIPImage,
  PIPBG,
  PIPImageCover,
  PIPTitleWrapper,
  PIPTitle,
  PIPDescribe,
} from "./PublicHeaderElement.jsx";
import { BackgroundPng } from "../BackgroundPng";

const PublicHeader = ({ title, describe, type, src }) => {
  AOS.init({
    once: true,
    duration: 2000,
    delay: 200,
  });

  useEffect(() => {}, []);
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
        ) : type === "image" ? (
          <PIPImage src={src} alt="image header" />
        ) : (
          <PIPBG />
        )}
      </div>
      <PIPImageCover />
      <PIPHeroWrapper>
        <PIPHeroWrapperBG />

        <PIPTitleWrapper data-aos="fade-up">
          {type === "bg" ? (
            <>
              <BackgroundPng
                src={`${process.env.PUBLIC_URL}/assets/images/png/airmax.png`}
                alt="logo"
                width="20%"
                top={true}
                left={true}
                opacity={0.5}
                flipH={true}
              />
              <BackgroundPng
                src={`${process.env.PUBLIC_URL}/assets/images/png/sneaker.png`}
                alt="logo"
                width="40%"
                top={false}
                left={false}
                opacity={0.1}
                flipH={true}
              />
            </>
          ) : null}
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
