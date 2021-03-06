import React, { useEffect, useReducer } from "react";
import {
  Contact,
  ContactContainer,
  ContactWrapper,
  ContactVideo,
  ContactContent,
  ContactTitle,
  ContactDescribe,
  ContactInf,
  ContactAddress,
  ContactsSocialWrapper,
  ContactsSocialLink,
  ContactsSocialImage,
  ContactsSocialText,
} from "./ContactElement";
import { BorderBottom } from "../../components/PublicComponents/BorderBottom";
import { BackgroundPng } from "../../components/PublicComponents/BackgroundPng.jsx";
import { BGSection } from "../../components/PublicComponents/BGSection";
import PublicHeader from "../../components/PublicComponents/PublicHeader";

const ContactUs = () => {
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
        title="Contact Us"
        describe="let us know you"
        type="image"
        src={`${process.env.PUBLIC_URL}/assets/images/shoe8web.jpg`}
      />
      <Contact id="contactus">
        <ContactContainer>
          <ContactWrapper>
            <ContactVideo controls preload="auto" muted className="video-js">
              <source
                src={`${process.env.PUBLIC_URL}/assets/videos/contactus web.mp4`}
                type="video/mp4"
              />
            </ContactVideo>
            <ContactContent>
              <ContactTitle>Contact us</ContactTitle>
              <BorderBottom height="2px" />
              <BackgroundPng
                width="40%"
                src={`${process.env.PUBLIC_URL}/assets/images/png/contact.png`}
                top={true}
                left={false}
                opacity={0.1}
                flipH={true}
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
                State/Province : KS
                <br />
                State/Province : Kansas
                <br />
                Zip Code/Postal code : 66031
              </ContactAddress>
              <ContactsSocialWrapper className="contacts_link">
                <ContactsSocialText>Contact Us with : </ContactsSocialText>
                <div>
                  <ContactsSocialLink
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <ContactsSocialImage
                      src={`${process.env.PUBLIC_URL}/assets/images/instagram.png`}
                      alt="instagram icon"
                    />
                  </ContactsSocialLink>
                  <ContactsSocialLink href="https://wa.me/" target="_blank">
                    <ContactsSocialImage
                      src={`${process.env.PUBLIC_URL}/assets/images/whatsapp.png`}
                      alt="whatsapp icon"
                    />
                  </ContactsSocialLink>
                  <ContactsSocialLink href="mailto: Mysupport@gmail.com">
                    <ContactsSocialImage
                      src={`${process.env.PUBLIC_URL}/assets/images/gmail.png`}
                      alt="gmail icon"
                    />
                  </ContactsSocialLink>
                </div>
              </ContactsSocialWrapper>
            </ContactInf>
            <BackgroundPng
              width="50%"
              mobileWidth="300px"
              src={`${process.env.PUBLIC_URL}/assets/images/png/contactus web.png`}
              top={false}
              left={true}
              opacity={0.1}
              flipH={true}
            />
          </ContactWrapper>
        </ContactContainer>
      </Contact>
    </BGSection>
  );
};

export default ContactUs;
