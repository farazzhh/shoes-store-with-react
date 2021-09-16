import React, {  useEffect } from "react";
import { BorderBottom } from "./BorderBottom";
import AOS from "aos";
import styled from "styled-components";

import { BackgroundPng } from "./BackgroundPng";

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
                opacity={0.3}
                flipH={true}
                mobileWidth="40%"
              />
              <BackgroundPng
                src={`${process.env.PUBLIC_URL}/assets/images/png/allStar.png`}
                alt="logo"
                width="30%"
                top={false}
                left={false}
                opacity={0.3}
                flipH={false}
                mobileWidth="50%"
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


export const PIPHeader = styled.div`
  width: 100vw;
  min-height: calc(100vh - 80px);
  overflow: hidden;
  position: sticky;
  top: 80px;
  left: 0;
  right: 0;
`;

export const PIPHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 768) {
    align-items: center;
    /* background: rgba(0, 0, 0, 0.3); */
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
`;

export const PIPHeroWrapperBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

export const PIPVideo = styled.video`
  width: 100%;
  height: calc(100vh - 80px);
  object-fit: cover;
  object-position: center center;
`;

export const PIPImage = styled.img`
  width: 100%;
  height: calc(100vh - 80px);
  object-fit: cover;
  object-position: center center;
`;
export const PIPBG = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: white;
`;

export const PIPImageCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const PIPTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const PIPTitle = styled.h1`
  color: #fff;
  font-size: 100px;
  text-shadow: 0 0px 5px rgba(255, 255, 255, 0.8);
  letter-spacing: -10px;
  position: relative;
  @media screen and (max-width: 480px) {
    font-size: 80px;
  }
`;

export const PIPDescribe = styled.p`
  color: #fff;
  opacity: 0;
  font-size: 35px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  letter-spacing: -5px;
`;
