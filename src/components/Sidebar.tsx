import React from "react";
import { additionals } from "../utils/navbarlist";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      {additionals.map(({ id, text, url }) => {
        return <li key={id}>{text}</li>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  align-self: flex-end;
  width: 60vw;
  background: #ffffff;
  height: 20vh;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 1024px) {
    display: none;
  }

  li {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default Sidebar;
