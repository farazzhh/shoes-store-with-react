import React, { useEffect } from "react";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng";
import { BGSection } from "../../components/PublicComponents/BGSection";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
import { PublicButton } from "../../components/PublicComponents/PublicButton";

import {
  About,
  AboutContainer,
  AboutWrapper,
  AboutVideoBg,
  AboutContent,
  AboutTitle,
  AboutDescribe,
} from "../AboutUs/AboutUsElement";
const AboutUs = () => {

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BGSection>
      <About id="aboutus">
        <BackgroundPng
          src={`${process.env.PUBLIC_URL}/assets/images/png/aboutus2 web.png`}
          width="30%"
          top={false}
          left={true}
          opacity={0.1}
          flipH={true}
        />
        <AboutContainer>
          <AboutWrapper>
            <AboutVideoBg
              src={`${process.env.PUBLIC_URL}/assets/videos/aboutusweb.mp4`}
              controls
              muted
              type="video/mp4"
            />

            <AboutContent>
              <AboutTitle>About us</AboutTitle>
              <BorderBottom/>
              <AboutDescribe>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae eaque dolor commodi illo animi corporis autem atque
                magnam ipsa possimus totam, temporibus nostrum dolorum quis
                maiores ea neque doloremque fugiat. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci suscipit quo quos hic
                inventore enim deleniti praesentium quod qui debitis est
                consequatur beatae odit veritatis, nostrum reprehenderit sunt
                quaerat provident.
              </AboutDescribe>
              <BackgroundPng
                width="50%"
                src={`${process.env.PUBLIC_URL}/assets/images/png/aboutus.png`}
                top={false}
                left={false}
                opacity={0.07}
                flipH={true}
              />
              <PublicButton to="/aboutus" margin="true" transparency="true" width="300px">
                See More
              </PublicButton>
            </AboutContent>
          </AboutWrapper>
        </AboutContainer>
      </About>
    </BGSection>
  );
};

export default AboutUs;
