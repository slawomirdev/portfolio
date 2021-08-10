import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icons from "./Icons";
import EmailMe from "./EmailMe";
import email from "../assets/email.png";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 400 },
  exit: { opacity: 0, y: 400, transition: { duration: 0.5 } },
};

const Skills: React.FC = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h2>Here are some technologies I have been working with:</h2>
        <div className="tools">
          <Icons />
        </div>
      </div>
      <motion.div
        className="certificates"
        initial="hidden"
        animate="visible"
        variants={variants}
        exit="exit"
      >
        <div className="sectionUp">
          <h1>Get in touch.</h1>
          <p>
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>

          <div className="underline"></div>
          <EmailMe />
        </div>
        <div className="sectionDown">
          <img src={email} alt="email img" />
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1440px) {
    width: 100vw;
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    width: 100vw;
    height: auto;
  }
  /* background: pink; */

  .hero {
    width: 50vw;
    height: 30vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 1rem 0rem;

    h2 {
      padding: 0rem 3rem;
    }

    @media only screen and (max-width: 1440px) {
      width: 100vw;
      height: auto;
      padding: 3rem 0rem;
    }

    @media only screen and (max-width: 1024px) {
      width: 100vw;
      height: auto;
    }

    .tools {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 30vw;
      height: auto;

      @media only screen and (max-width: 1440px) {
        width: 80vw;
        height: auto;
      }

      @media only screen and (max-width: 1024px) {
        width: 80vw;
      }

      svg {
        height: 4rem;
        width: 4rem;
        padding: 0rem 1rem;
      }

      svg:hover {
        fill: blue;
      }
    }
  }

  .certificates {
    width: 50vw;
    height: 50vh;
    background: #233554;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
      padding: 1rem 1rem;
    }

    @media only screen and (max-width: 1440px) {
      width: 100vw;
      height: auto;
      flex-direction: column-reverse;
    }

    @media only screen and (max-width: 1024px) {
      width: 100vw;
      height: auto;
      flex-direction: column-reverse;
    }

    img {
      height: 25rem;
      width: 30rem;
      object-fit: contain;
    }
  }

  .sectionUp {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    height: 50vh;
    text-align: center;
    justify-content: center;

    @media only screen and (max-width: 1440px) {
      width: 90vw;
      height: auto;
    }

    @media only screen and (max-width: 1024px) {
      width: 90vw;
      height: auto;
    }

    p {
      padding: 1.5rem 0rem;
    }
  }

  .sectionDown {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    height: 50vh;
    text-align: center;
    justify-content: center;
  }
`;

export default Skills;
