import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      <Card />
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

export default Home;
