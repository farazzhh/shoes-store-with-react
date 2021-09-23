import styled from "styled-components";

export const About = styled.section`
  width: 100vw;
  padding: 200px 0 250px 0;
`;

export const AboutContainer = styled.div`
  width: 70%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const AboutWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px;
  border-left: #870a30 1px solid;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
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
  position: relative;
`;

export const AboutTitle = styled.h1`
  font-size: 35px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  font-weight: 400;
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
  color:gray;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AboutImageGalleryWrapper = styled.div`
  margin: 150px auto 0 auto;
  background: rgba(255, 255, 255, 1);
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
