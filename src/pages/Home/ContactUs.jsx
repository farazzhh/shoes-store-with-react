import React, { useEffect } from "react";
import {
  Contact,
  ContactContainer,
  ContactWrapper,
  ContactVideo,
  ContactContent,
  ContactTitle,
  ContactDescribe,
  ContactsSocialWrapper,
  ContactsSocialLink,
  ContactsSocialImage,
  ContactsSocialText,
  ContactInf,
  ContactAddress,
} from "../ContactUs/ContactElement.jsx";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng.jsx";
import { BGSection } from "../../components/PublicComponents/BGSection";
import { PublicButton } from "../../components/PublicComponents/PublicButton.jsx";
import PublicHeader from "../../components/PublicComponents/PublicHeader/PublicHeader.jsx";

const ContactUs = () => {
 
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BGSection>
      <PublicHeader
        title="Contact Us"
        describe="let us know you"
        type="image"
        src={`${process.env.PUBLIC_URL}/assets/images/shoe8.jpg`}
      />
      <Contact id="contactus">
        <ContactContainer>
          <BackgroundPng
            width="30%"
            src={`${process.env.PUBLIC_URL}/assets/images/png/contactus3.png`}
            top={true}
            left={false}
            opacity={0.5}
            flipH={false}
          />
          <ContactWrapper>
            <ContactVideo
              src={`${process.env.PUBLIC_URL}/assets/videos/contactus web.mp4`}
              controls
              playsInline
              muted
              type="video/mp4"
            />
            <ContactContent>
              <ContactTitle>Contact us</ContactTitle>
              <BorderBottom height="2px" />
              <BackgroundPng
                width="40%"
                src={`${process.env.PUBLIC_URL}/assets/images/png/contact.png`}
                top={true}
                left={false}
                opacity={0.1}
                flipH={false}
              />
              <ContactDescribe>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae eaque dolor commodi illo animi corporis autem atque
                magnam ipsa possimus totam, temporibus nostrum dolorum quis
                maiores ea neque doloremque fugiat. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci suscipit quo quos hic
                inventore enim deleniti praesentium quod qui debitis est
                consequatur beatae odit veritatis, nostrum reprehenderit sunt
                quaerat provident.
              </ContactDescribe>
              <BorderBottom height="2px" />
            </ContactContent>

            <ContactInf>
              <ContactAddress>
                Call us: +1 (713) 999-8888
                <br />
                Street : 1418 Pooh Bear Lane City NEW CENTURY
                <br />
                State/Province : Kansas
                <br />
                Zip Code/Postal code : 66031
              </ContactAddress>
              <ContactsSocialWrapper className="contacts_link">
                <ContactsSocialText>Check Us in : </ContactsSocialText>
                <div>
                  <ContactsSocialLink
                    to="https://www.instagram.com/"
                    target="_blank"
                  >
                    <ContactsSocialImage
                      src={`${process.env.PUBLIC_URL}/assets/images/instagram.png`}
                      alt="instagram icon"
                    />
                  </ContactsSocialLink>
                  <ContactsSocialLink to="https://wa.me/" target="_blank">
                    <ContactsSocialImage
                      src={`${process.env.PUBLIC_URL}/assets/images/whatsapp.png`}
                      alt="whatsapp icon"
                    />
                  </ContactsSocialLink>
                  <ContactsSocialLink to="mailto: Mysupport@gmail.com">
                    <ContactsSocialImage
                      src={`${process.env.PUBLIC_URL}/assets/images/gmail.png`}
                      alt="gmail icon"
                    />
                  </ContactsSocialLink>
                </div>
              </ContactsSocialWrapper>
            </ContactInf>
            <BackgroundPng
              width="20%"
              src={`${process.env.PUBLIC_URL}/assets/images/png/contactus web.png`}
              top={false}
              left={true}
              opacity={0.3}
              flipH={true}
            />
            <PublicButton
              to="/contactus"
              margin="true"
              width="250px"
              transparency="true"
            >
              See More
            </PublicButton>
          </ContactWrapper>
        </ContactContainer>
      </Contact>
    </BGSection>
  );
};

export default ContactUs;
