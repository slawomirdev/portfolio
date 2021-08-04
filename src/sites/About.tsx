import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Navbar />
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
`;

export default About;
