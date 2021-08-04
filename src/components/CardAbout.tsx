import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, x: -400 },
  exit: { opacity: 0, x: -400, transition: { duration: 0.5 } },
};

const CardAbout: React.FC = () => {
  return (
    <CardWrapper
      initial="hidden"
      animate="visible"
      variants={variants}
      exit="exit"
    ></CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  position: absolute;
  left: -50%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  background: #0a192f;
  color: #fff;
  height: 10rem;
`;

export default CardAbout;
