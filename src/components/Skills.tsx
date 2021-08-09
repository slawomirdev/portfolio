import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icons from "./Icons";
import EmailMe from "./EmailMe";
import emojiComputer from "../assets/emojiComputer.png";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 400 },
  exit: { opacity: 0, y: 400, transition: { duration: 0.5 } },
};

const Skills: React.FC = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h1>Here are some technologies I have been working with:</h1>
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
        <h1>Let's Build Something Together</h1>

        <div className="sectionUp">
          <p>
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
          <p>I'm currently looking for an internship.</p>
          <img src={emojiComputer} alt="me on computer" />
        </div>
        <div className="underline"></div>
        <EmailMe />
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1600px) {
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

    h1 {
      padding: 0rem 3rem;
    }

    @media only screen and (max-width: 1600px) {
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

      @media only screen and (max-width: 1600px) {
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
    flex-direction: column;
    align-items: center;

    h1 {
      padding: 1rem 1rem;
    }

    @media only screen and (max-width: 1600px) {
      width: 100vw;
      height: auto;
    }

    @media only screen and (max-width: 1024px) {
      width: 100vw;
      height: auto;
    }

    img {
      height: 10rem;
      width: 15rem;
      object-fit: contain;
    }
  }

  .sectionUp {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 60%;

    a {
      color: white;
      position: relative;
    }

    p {
      padding: 1rem;
    }
  }
`;

export default Skills;
