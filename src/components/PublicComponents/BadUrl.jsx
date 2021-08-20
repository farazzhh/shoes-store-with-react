import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BadUrl = () => {
  return (
    <Section>
      <h1>Wrong URL</h1>
      <Link to="/">
        <h3>Go to HomePage</h3>
      </Link>
    </Section>
  );
};

export const Section = styled.section`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: #870a30;
    margin-top: 20px;
  }
`;
