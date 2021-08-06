import React from "react";
import { additionals } from "../utils/navbarlist";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      {additionals.map(({ id, text, url, active }) => {
        if (active === false) {
          return (
            <li key={id} className="notActive">
              {text}
            </li>
          );
        } else {
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        }
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
    width: 100vw;
    height: 10rem;
    align-self: default;
  }

  li {
    font-size: 1rem;
    font-weight: bold;
  }

  a {
    position: relative;
    color: black;
  }
  a:after {
    background: black;
  }
`;

export default Sidebar;
