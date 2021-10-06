import React, { useEffect } from "react";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng";
import { BGSection } from "../../components/PublicComponents/BGSection";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
import { PublicLink } from "../../components/PublicComponents/PublicButton";
import PublicHeader from "../../components/PublicComponents/PublicHeader";
import AboutImageGallery from "../AboutUs/AboutImageGallery";
import { FaBars } from "react-icons/fa";
import {
  About,
  AboutContainer,
  AboutWrapper,
  AboutVideoBg,
  AboutContent,
  AboutTitle,
  AboutDescribe,
  AboutImageGalleryWrapper,
} from "../AboutUs/AboutUsElement";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BGSection>
      <PublicHeader
        title="About Us"
        describe="Meet ShoesStore"
        type="image"
        src={`${process.env.PUBLIC_URL}/assets/images/shoe13web.jpg`}
      />
      <About id="aboutus">
        <AboutContainer>
          <BackgroundPng
            width="40%"
            src={`${process.env.PUBLIC_URL}/assets/images/png/aboutus.png`}
            top={false}
            left={false}
            opacity={0.1}
            flipH={true}
          />
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
                quaerat provident. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatibus nulla magnam sit dolorum
                explicabo possimus reprehenderit eveniet porro voluptates
                quisquam quas asperiores nobis mollitia hic repellendus, natus,
                iste voluptate. Est? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore dicta reprehenderit deserunt incidunt
                ducimus quibusdam quo quos asperiores laborum expedita voluptate
                dignissimos vitae, quod ratione. Incidunt laudantium
                voluptatibus necessitatibus facere?
              </AboutDescribe>
            </AboutContent>
            <PublicLink
              to="/aboutus"
              margin="true"
              transparency="true"
              width="250px"
            >
              See More
            </PublicLink>
          </AboutWrapper>
        </AboutContainer>
      </About>
    </BGSection>
  );
};

export default AboutUs;
