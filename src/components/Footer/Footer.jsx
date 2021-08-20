import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { BGSection } from "../PublicComponents/BGSection";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
    SocialIconLink,
    Logo,
  Title
} from "./FooterElement";

const Footer = () => {
  const toggleHome = () => {
    // scroll.scrollToTop();
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
                <SocialLogo to="/">
                  <Logo
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                    alt="logo"
                  />
                  <Title>ShoesStore</Title>
                </SocialLogo>
                <WebSiteRights>
                  Company {new Date().getFullYear()} All Rights reserved.
                </WebSiteRights>
                <SocialIcons>
                  <SocialIconLink
                    hred="//www.facebook.com"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    hred="//www.instagram.com"
                    target="_blank"
                    aria-label="Instgaram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    hred="//www.youtube.com"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink
                    hred="//www.twitter.com"
                    target="_blank"
                    aria-label="Twiiter"
                  >
                    <FaTwitter />
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
