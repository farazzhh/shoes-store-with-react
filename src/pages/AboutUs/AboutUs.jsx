import React, { useEffect, useReducer } from "react";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng";
import { BGSection } from "../../components/PublicComponents/BGSection";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
import PublicHeader from "../../components/PublicComponents/PublicHeader";
import AboutImageGallery from "./AboutImageGallery.jsx";
import {
  About,
  AboutContainer,
  AboutWrapper,
  AboutVideoBg,
  AboutContent,
  AboutTitle,
  AboutDescribe,
  AboutImageGalleryWrapper,
} from "./AboutUsElement";
const AboutUs = () => {
const [, forceUpdate] = useReducer((x) => x + 1, 0);
useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
  forceUpdate();
}, []);

  return (
    <BGSection>
      <PublicHeader
        title="About Us"
        describe="Meet ShoesStore"
        type="image"
        src={`${process.env.PUBLIC_URL}/assets/images/shoe6.jpg`}
      />
      <About id="aboutus">
        <AboutContainer>
          <AboutWrapper>
            <AboutVideoBg
              src={`${process.env.PUBLIC_URL}/assets/videos/aboutusweb.mp4`}
              controls
              muted
              playsInline
              type="video/mp4"
            />
            <AboutContent>
              <AboutTitle>About us</AboutTitle>
              <BorderBottom />
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
            </AboutContent>
          </AboutWrapper>
          <BackgroundPng
            src={`${process.env.PUBLIC_URL}/assets/images/png/aboutus2 web.png`}
            width="30%"
            top={true}
            left={true}
            opacity={0.3}
            flipH={true}
          />
          <BackgroundPng
            width="40%"
            src={`${process.env.PUBLIC_URL}/assets/images/png/aboutus.png`}
            top={false}
            left={false}
            opacity={0.1}
            flipH={true}
          />
        </AboutContainer>

        {/* Image Gallery Slide Show */}
        <AboutImageGalleryWrapper>
          <AboutImageGallery />
        </AboutImageGalleryWrapper>
      </About>
    </BGSection>
  );
};

export default AboutUs;
