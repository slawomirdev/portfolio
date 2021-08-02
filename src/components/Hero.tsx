import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <Sign>
        <h1>Hi, Sławomir here.</h1>
        <span>|</span>
      </Sign>
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

const Sign = styled.div`
  height: 40vh;
  width: 30vw;
  z-index: 3;
  display: flex;
  align-items: center;
  padding-left: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    animation: type 3s steps(18);
    overflow: hidden;
    white-space: nowrap;
    font-family: consolas;
    width: 18ch;
  }

  span {
    color: #fff;
    animation: blink 1s linear infinite;
    font-size: 3rem;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes type {
    0% {
      width: 0ch;
    }

    100% {
      width: 18ch;
    }
  }
`;

export default Hero;
