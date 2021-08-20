import styled from "styled-components";
export const About = styled.section`
  width: 100vw;
  padding: 200px 0;
  background:  rgba(135, 10, 47, 0.9) ;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

// AboutVideo, AboutVideoBg, AboutContent, AboutTitle, AboutDescribe;
export const AboutContainer = styled.div`
  width: 70%;
  max-width: 1100px;
  margin: 0 auto;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255,1);
  
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em; 
  border-radius: 10px;
  overflow: hidden;
  border-bottom: #870a30 1px solid;
  border-left: #870a30 1px solid;
  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const AboutVideoBg = styled.video`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const AboutContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const AboutTitle = styled.h1`
  font-size: 35px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  font-weight: 800;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const AboutDescribe = styled.p`
  font-size: 20px;
  margin: 30px 0 40px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AboutImageGalleryWrapper = styled.div`
  margin: 150px auto 0 auto;
  background: rgba(255, 255, 255, 0.5);
  width: 90%;
  max-width: 1100px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
  rgba(0, 0, 0, 0.3) 0px 7px 13px -3px;
  border-bottom: #870a30 3px solid;
  border-left: #870a30 1px solid;
  overflow: hidden;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;
