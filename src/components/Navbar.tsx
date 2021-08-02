import React from "react";
import styled from "styled-components";
import { links } from "../utils/navbarlist";

const Navbar: React.FC = () => {
  return (
    <NavWrapper>
      <div className="logo">
        <h1>mendyka.</h1>
        <h3>frontend developer</h3>
      </div>
      <ul className="list">
        {links.map(({ id, text, url }) => {
          return <li key={id}>{text}</li>;
        })}
      </ul>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  height: 20vh;
  width: 100%;
  display: flex;
  /* background: blue; */
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  text-align: center;

  .logo {
    /* background: red; */
    height: 20vh;
    width: 20vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {
      font-weight: bold;
    }
  }
  .list {
    /* background: pink; */
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
`;

export default Navbar;
