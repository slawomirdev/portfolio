import React from "react";
import styled from "styled-components";
import SvgSign from "./SvgSign";
//components

import Sidebar from "./Sidebar";
import EmailMe from "./EmailMe";
//Icons

import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 200 },
};

const Hero: React.FC = () => {
  return (
    <HeroWrapper
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 400, transition: { duration: 0.5 } }}
    >
      <div className="boxWrapper">
        <SignWrapper>
          <SvgSign />
        </SignWrapper>
        <Intro initial="hidden" animate="visible" variants={variants}>
          <h1>Breathing in the aroma of creativity.</h1>
          <p>
            Ham followed now ecstatic use speaking exercise may repeated.
            Himself he evident oh greatly my on inhabit general concern.
          </p>
          <EmailMe />
        </Intro>
      </div>
      <Sidebar />
    </HeroWrapper>
  );
};

const HeroWrapper = styled(motion.div)`
  height: 80vh;
  width: 90vw;
  background: #0a192f;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  /* justify-content: flex-end; */

  .boxWrapper {
    width: 90vw;
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
  }

  @media only screen and (max-width: 1024px) {
    width: 100vw;
    align-self: normal;
    height: auto;

    .boxWrapper {
      width: 100vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-top: 3rem;
      height: auto;
    }
  }
`;

const SignWrapper = styled.div`
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

  @media only screen and (max-width: 1024px) {
    padding-left: 0rem;
    justify-content: center;
    width: 70vw;
    height: 30vh;
    padding: 0rem 1rem 0rem 1rem;
  }
`;

const Intro = styled(motion.div)`
  height: 45vh;
  width: 45vw;
  color: #ffffff;
  z-index: 4;
  padding: 1rem 6rem 1rem 6rem;
  display: flex;
  flex-direction: column;

  p {
    padding-top: 1rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 1rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
  }
`;

export default Hero;
