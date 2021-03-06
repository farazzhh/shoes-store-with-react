import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Products from "./Products.jsx";
import styled from "styled-components";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <ParallexBody>
        <AboutUs />
        <Products />
        <ContactUs />
      </ParallexBody>
    </>
  );
};

export default Home;

export const ParallexBody = styled.div`
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;
