import styled from "styled-components";

export const Contact = styled.section`
  width: 100vw;
  min-height: 800px;
  padding: 200px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  overflow: hidden;

  @media all and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactContainer = styled.div`
  width: 70%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 10px;
  border-bottom: #870a30 1px solid;
  border-left: #870a30 1px solid;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
export const ContactVideo = styled.video`
  width: 100%;
`;

export const ContactContent = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContactTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 35px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  font-weight: 800;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const ContactDescribe = styled.p`
  font-size: 18px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  margin: 30px 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ContactInf = styled.div`
  display: flex;
  padding: 0 30px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  row-gap: 30px;
  margin: 10px 0   30px;
  `;

export const ContactAddress = styled.p`
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ContactsSocialWrapper = styled.div`
  width: 40%; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  @media screen and (max-width: 480px) {
    width: 80%;
  }

  div {
    display: flex;
    margin-bottom: 20px;
  }
`;

export const ContactsSocialLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  background: rgb(255, 255, 255);
  border-bottom: rgba(255, 105, 180, 0.5) 2px solid;
  border-left: rgba(255, 105, 180, 0.5) 1px solid;
  box-shadow: 0px 0px 25px rgba(102, 102, 102, 0.3);
  padding: 10px;

  &:hover {
    border-bottom: rgba(255, 105, 180, 0.8) 2px solid;
    border-left: rgba(255, 105, 180, 0.8) 1px solid;
    box-shadow: 0px 0px 5px rgba(102, 102, 102, 0.3);
  }

  @media all and (max-width: 768px) {
    padding: 7px;
  }
`;

export const ContactsSocialImage = styled.img`
  object-fit: contain;
  height: 40px;
  padding: 5px;

  @media screen and (max-width: 328px) {
    height: 20px;
    padding: 2px;
  }
`;

export const ContactsSocialText = styled.span`
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
