import React from "react";
import styled from "styled-components";

const CardAbout: React.FC = () => {
  return <CardWrapper></CardWrapper>;
};

const CardWrapper = styled.div`
  position: absolute;
  left: -50%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  background: #233554;
  color: #fff;
  height: 10rem;
`;

export default CardAbout;
