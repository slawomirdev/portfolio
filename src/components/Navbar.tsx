import React from "react";
import styled from "styled-components";
import { links } from "../utils/navbarlist";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <NavWrapper>
      <div className="logo">
        <h1>mendyka.</h1>
        <h3>frontend developer</h3>
      </div>
      <ul className="list">
        {links.map(({ id, text, url, active }) => {
          if (active === false) {
            return (
              <li key={id} className="notActive">
                {text}
              </li>
            );
          } else {
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          }
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
    height: 20vh;
    width: 30vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;

    .notActive {
      color: grey;
      cursor: default;
    }

    li {
      padding: 1.5rem;
    }

    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      position: relative;
    }

    a:after {
      background: black;
    }
  }

  @media only screen and (max-width: 1024px) {
    justify-content: center;

    .list {
      display: none;
    }
  }
`;

export default Navbar;
