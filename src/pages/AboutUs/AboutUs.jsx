import React, { useEffect, useRef } from "react";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng";
import { BGSection } from "../../components/PublicComponents/BGSection";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
import PublicHeader from "../../components/PublicComponents/PublicHeader/PublicHeader";
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
  const inputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("scroll", function (e) {
      if (inputRef.current !== null) {
        if (window.scrollY > inputRef.current.offsetHeight + 80) {
          // class width-0 made in App.css
          inputRef.current.classList.add("width-0");
        } else {
          inputRef.current.classList.remove("width-0");
        }
      }
    });
  }, []);

  return (
    <BGSection>
      <PublicHeader
        title="About Us"
        describe="Meet ShoesStore"
        type="image"
        src={`${process.env.PUBLIC_URL}/assets/images/shoe6.jpg`}
        ref={inputRef}
      />
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
              muted
              type="video/mp4"
              controls
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
              <BackgroundPng
                width="50%"
                src={`${process.env.PUBLIC_URL}/assets/images/png/aboutus.png`}
                top={false}
                left={false}
                opacity={0.07}
                flipH={true}
              />
            </AboutContent>
          </AboutWrapper>
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
