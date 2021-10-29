import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Projects from "../components/Projects";


const Work: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export default Work;
