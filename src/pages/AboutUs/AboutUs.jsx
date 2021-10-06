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
  // its for rafreshing, without this , the slide animation on public header does not work correctly
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
        src={`${process.env.PUBLIC_URL}/assets/images/shoe13web.jpg`}
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
                quaerat provident. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sequi illum sunt impedit voluptatem voluptatum
                ut dolorum totam, ad ipsa soluta perferendis nisi, ipsam ullam
                reiciendis placeat, quisquam eaque harum dolor. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. A labore eius
                nostrum, repellendus consequatur accusamus cum quod culpa.
                Asperiores nostrum dicta maiores sequi consequuntur doloremque
                delectus molestias voluptatibus ut enim!
              </AboutDescribe>
            </AboutContent>
          </AboutWrapper>

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
