import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { BGSection } from "../PublicComponents/BGSection";
import {
  FooterContainer,
  FooterWrap,
  // FooterLinksContainer,
  // FooterLinkWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLink,
  Logo,
  Title,
} from "./FooterElement";

const Footer = () => {
  const style = {
    width: "30px",
    height: "30px",
  };

  return (
    <BGSection>
      <FooterContainer>
        <FooterWrap>
          {/* <FooterLinksContainer> */}
          {/* <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How it Works</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Invsetors</FooterLink>
                <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorship</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Video</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper> */}

          <SocialMedia>
            <SocialMediaWrap>
              <FooterLogo to="/">
                <Logo
                  src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                  alt="logo"
                />
                <Title>ShoesStore</Title>
              </FooterLogo>

              <WebSiteRights>
                Company {new Date().getFullYear()} All Rights reserved.
              </WebSiteRights>

              <SocialIcons>
                <SocialIconLink
                  to="//www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook style={style} />
                </SocialIconLink>
                <SocialIconLink
                  to="//www.instagram.com"
                  target="_blank"
                  aria-label="Instgaram"
                >
                  <FaInstagram style={style} />
                </SocialIconLink>
                <SocialIconLink
                  to="//www.youtube.com"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube style={style} />
                </SocialIconLink>
                <SocialIconLink
                  to="//www.twitter.com"
                  target="_blank"
                  aria-label="Twiiter"
                >
                  <FaTwitter style={style} />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
          {/* </FooterLinksContainer> */}
        </FooterWrap>
      </FooterContainer>
    </BGSection>
  );
};

export default Footer;
