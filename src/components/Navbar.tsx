import React, { useState } from "react";
import styled from "styled-components";
import { links } from "../utils/navbarlist";
import { Link } from "react-router-dom";
//Icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiX } from "react-icons/bi";

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <NavWrapper className={`${menuActive ? "navbarActive" : null}`}>
      <div className="logo">
        <h1>mendyka.</h1>
        <h3>frontend developer</h3>
        {menuActive ? (
          <BiX className="lowRes" onClick={() => setMenuActive(false)} />
        ) : (
          <HiOutlineMenuAlt3
            className="lowRes"
            onClick={() => setMenuActive(true)}
          />
        )}
      </div>
      <ul className={`list ${menuActive ? "mobileMenu" : null}`}>
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
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  text-align: center;
  position: relative;
  transition: all 0.5s ease-out;

  .navbarActive {
    height: 100%;
  }

  .lowRes {
    display: none;
  }

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
    z-index: 4;
    flex-direction: column;

    .list {
      display: none;
    }

    .mobileMenu {
      display: flex;
      flex-direction: column;
      height: 80vh;
      width: 80vw;
      justify-content: space-around;
      font-size: 3rem;
    }

    .lowRes {
      display: block;
      position: absolute;
      left: 80%;
      width: 3.5rem;
      height: 3.5rem;
    }

    .logo {
      width: 100vw;
    }

    li {
      user-select: none;
    }
  }
`;

export default Navbar;
