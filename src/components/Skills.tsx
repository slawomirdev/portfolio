import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icons from "./Icons";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 400 },
  exit: { opacity: 0, y: 400, transition: { duration: 0.5 } },
};

const Skills: React.FC = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h1>By the way, these are some of the tools I'm currently using:</h1>
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
        <h2>Certificates from udemy or similar platforms:</h2>
        <ul className="sectionUp">
          <li>
            <a href="https://www.udemy.com/certificate/UC-bd508528-4dba-4027-93ae-8d4641eb3204/">
              The Complete 2021 Web Development Bootcamp
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/certificate/UC-a74600ca-7e0d-4c41-a133-826138028c4d/">
              Understanding TypeScript - 2021 Edition
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com/certificate/UC-adcbfafe-825c-4282-a46d-8236901ec357/">
              React Tutorial and Projects Course
            </a>
          </li>
        </ul>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
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

    h2 {
      padding: 1rem 1rem;
    }

    @media only screen and (max-width: 1024px) {
      width: 100vw;
    }

    img {
      height: 10rem;
      width: 15rem;
      object-fit: contain;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    list-style: none;

    li {
      padding: 1rem 0rem;
    }

    a {
      color: white;
      position: relative;
    }
  }
`;

export default Skills;
