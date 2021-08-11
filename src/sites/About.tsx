import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Skills from "../components/Skills";

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Navbar />
      <div className="section">
        <Content />
        <Skills />
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  overflow-x: hidden;

  .section {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 1440px) {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1024px) {
    .section {
      flex-direction: column;
    }
  }
`;

export default About;
