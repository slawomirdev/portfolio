import React from "react";
import styled from "styled-components";
import SvgSign from "./SvgSign";
import { Link } from "react-router-dom";
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
          <h1>Creativity takes courage.</h1>
          <p>
            I'm a student and developer from Poland. I have profound interest in
            frontend development, computer science and everything in between.
            Read more on
            <Link to="/about"> about page</Link>.
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
      padding-top: 1.5rem;
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
  }

  span {
    color: #fff;
    animation: blink 1s linear infinite;
    font-size: 3rem;
  }

  @media only screen and (max-width: 1024px) {
    padding-left: 0rem;
    justify-content: center;
    width: 70vw;
    height: 30vh;
    padding: 0rem 1rem 0rem 1rem;
  }

  @media only screen and (max-width: 1024px) and (orientation: landscape) {
    padding-left: 0rem;
    justify-content: center;
    width: 90vw;
    height: auto;
    padding: 1rem;

    svg {
      height: 15rem;
      width: 20rem;
    }
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

    a {
      text-decoration: none;
      color: #ffffff;
      font-weight: bold;
      font-size: 1.3rem;
    }

    a:after {
      width: 0;
    }
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
