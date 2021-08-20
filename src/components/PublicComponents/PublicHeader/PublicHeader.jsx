import React from "react";
import { BorderBottom } from "../BorderBottom";
import {
  PIPHeader,
  PIPHeroWrapper,
  PIPHeroWrapperBG,
  PIPImage,
  PIPTitleWrapper,
  PIPTitle,
  PIPDescribe,
} from "./PublicHeaderElement.jsx";

const PublicHeader = ({ title, video }) => {
  return (
    <PIPHeader>
      <PIPImage src={video} autoPlay muted type="video/mp4" />
      <PIPHeroWrapper>
        <PIPHeroWrapperBG />
        <PIPTitleWrapper>
          <PIPTitle>
            {title}
            <BorderBottom />
          </PIPTitle>
          <PIPDescribe>choose yours</PIPDescribe>
        </PIPTitleWrapper>
      </PIPHeroWrapper>
    </PIPHeader>
  );
};

export default PublicHeader;
