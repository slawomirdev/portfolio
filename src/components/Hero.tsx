import React from "react";
import styled from "styled-components";

const Hero: React.FC = () => {
  return <HeroWrapper></HeroWrapper>;
};

const HeroWrapper = styled.div`
  height: 80vh;
  width: 90vw;
  background: #0a192f;
  display: flex;
  align-self: flex-end;
`;

export default Hero;
