import React from "react";
import {
  FaReact,
  FaHtml5,
  FaSass,
  FaGitSquare,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiStyledComponents,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiAdobexd,
} from "react-icons/si";

const Icons: React.FC = () => {
  return (
    <>
      <FaReact />
      <SiJavascript />
      <SiTypescript />
      <FaHtml5 />
      <FaSass />
      <SiStyledComponents />
      <FaGitSquare />
      <SiMongodb />
      <SiMysql />
      <FaNodeJs />
      <SiNetlify />
      <SiAdobexd />
    </>
  );
};

export default Icons;
