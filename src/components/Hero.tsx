import React from "react";
import styled from "styled-components";
import SvgSign from "./SvgSign";
import { additionals } from "../utils/navbarlist";

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <div className="boxWrapper">
        <SignWrapper>
          <SvgSign />
        </SignWrapper>
        <Intro>
          <h1>Breathing in the aroma of creativity.</h1>
          <p>
            Ham followed now ecstatic use speaking exercise may repeated.
            Himself he evident oh greatly my on inhabit general concern.
          </p>
          <button>Learn more</button>
        </Intro>
      </div>
      <SideBar>
        {additionals.map(({ id, text, url }) => {
          return <li key={id}>{text}</li>;
        })}
      </SideBar>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  height: 80vh;
  width: 90vw;
  background: #0a192f;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  /* justify-content: flex-end; */

  .boxWrapper {
    width: 90vw;
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
  }
`;

const SideBar = styled.ul`
  display: flex;
  align-self: flex-end;
  width: 60vw;
  background: #ffffff;
  height: 20vh;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  li {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const SignWrapper = styled.div`
  height: 40vh;
  width: 30vw;
  z-index: 3;
  display: flex;
  align-items: center;
  padding-left: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    animation: type 3s steps(18);
    overflow: hidden;
    white-space: nowrap;
    font-family: consolas;
    width: 18ch;
  }

  span {
    color: #fff;
    animation: blink 1s linear infinite;
    font-size: 3rem;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes type {
    0% {
      width: 0ch;
    }

    100% {
      width: 18ch;
    }
  }
`;

const Intro = styled.div`
  height: 45vh;
  width: 45vw;
  color: #ffffff;
  z-index: 4;
  padding: 1rem 6rem 1rem 6rem;

  p {
    padding-top: 1rem;
  }

  button {
    border: none;
    background: transparent;
    padding-top: 1rem;
    font-size: 1rem;
    color: #ffffff;
    font-weight: bold;
    position: relative;
    cursor: pointer;
  }

  button:after {
    content: "";
    position: absolute;
    background: #ffffff;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  button:hover:after {
    width: 100%;
  }
`;

export default Hero;
