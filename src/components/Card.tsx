import React from "react";
import styled from "styled-components";
import { socials } from "../utils/navbarlist";
import emoji from "../assets/emoji.png";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: -200 },
  exit: { opacity: 0, y: -200, transition: { duration: 0.5 } },
};

const variantsImg = {
  visible: { scale: 1, transition: { duration: 2 } },
  hidden: { scale: 0.3 },
  exit: { scale: 0.1, transition: { duration: 0.5 } },
};

const Card: React.FC = () => {
  return (
    <CardWrapper
      initial="hidden"
      animate="visible"
      variants={variants}
      exit="exit"
    >
      <ul className="list">
        {socials.map(({ id, text, url }) => {
          return <li key={id}>{text}</li>;
        })}
      </ul>
      <div className="emojiWrapper">
        <motion.img
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variantsImg}
          src={emoji}
          alt="emoji"
        />
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  height: 60vh;
  background: #233554;
  color: #fff;

  .emojiWrapper {
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
  }

  .list {
    height: 20vh;
    width: 30vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      padding: 1.5rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    background: transparent;
    .list {
      display: none;
    }
  }
`;

export default Card;
