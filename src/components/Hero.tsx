import React from "react";
import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <SideBar />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  height: 80vh;
  width: 90vw;
  background: #0a192f;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: flex-end;
`;

const SideBar = styled.div`
  display: flex;
  align-self: flex-end;
  width: 60vw;
  background: #ffffff;
  height: 20vh;
`;

export default Hero;
