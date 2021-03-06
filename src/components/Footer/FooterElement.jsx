import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  padding: 20px 0;
  background: #fff;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
`;

export const FooterWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const FooterLinksContainer = styled.div`
//   width: 90%;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-template-rows: 1fr;
//   margin-top: 30px;
//   padding: 10px 0;
//   text-align: center;
//   justify-content: center;
//   background: linear-gradient(
//     to bottom,
//     rgba(236, 143, 208, 0.7) 70%,
//     rgba(236, 143, 208, 0.3)
//   );
//   border-radius: 10px;
//   backdrop-filter: blur(2px);
//   box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
//     rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
//   border-bottom: #870a30 3px solid;
//   border-left: #870a30 1px solid;
//   @media screen and (max-width: 688px) {
//     padding: 32px;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 1fr 1fr;
//   }
// `;

// export const FooterLinkWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: flex-start;
// `;

// export const FooterLinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 16px;
//   box-sizing: border-box;

//   @media screen and (max-width: 420px) {
//     margin: 0;
//     padding: 10px;
//   }
// `;

// export const FooterLinkTitle = styled.h1`
//   font-size: 14px;
//   margin-bottom: 16px;
//   text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
// `;

// export const FooterLink = styled(Link)`
//   text-align: center;
//   text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
//   text-decoration: none;
//   margin-bottom: 0.5rem;
//   font-size: 14px;
//   cursor: pointer;
//   &:hover {
//     transition: 0.3s ease-out;
//     text-shadow: 0 0 3px rgba(255, 105, 180, 0.7);
//   }
// `;

export const SocialMedia = styled.section`
width: 100%;
display: flex;
justify-content: center;
 `;

export const SocialMediaWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: 1fr;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 80px 30px;
    grid-row-gap: 10px;
    justify-items: center;
  }
`;

export const FooterLogo = styled(Link)`
  cursor: pointer;
  place-self: center center;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  background-color: rgba(135, 10, 47, 0.8);
  padding: 5px;
  border-radius: 50%;
  box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 5px;
  text-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);
`;

export const WebSiteRights = styled.small`
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  place-self: center center;
  @media screen and (max-width: 768px) {
    grid-row: 3;
  }
  `;

export const SocialIcons = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  display: flex;
  gap: 30px;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
  border-bottom: solid 1px lightgray;
  border-top: solid 1px lightgray;
  }
`;

export const SocialIconLink = styled(Link)`
  cursor: pointer;
  height: 30px;
`;
