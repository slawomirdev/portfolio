import React from "react";
import styled from "styled-components";

const Skills: React.FC = () => {
  return (
    <Wrapper>
      <div className="hero">
        <h1>My skills</h1>
        <h3>
          Through my studies, I've gained a solid understanding of computer
          science and web development concepts, and have dedicated a lot of my
          free time to apply these concepts to real-world scenarios and
          applications.
        </h3>
        <ul>
          <li>Javascript ES6</li>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>SASS</li>
          <li>Styled-Components</li>
          <li>Git</li>
          <li>MongoDB & SQL</li>
          <li>Node</li>
        </ul>
      </div>
      <div className="certificates">
        <div className="sectionUp">
          <h2>Here are some certificates from udemy or similar platforms:</h2>
          <div className="box"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  width: 45vw;
  display: flex;
  flex-direction: column;
  /* background: pink; */

  .hero {
    width: 35vw;
    height: 25vh;
  }

  .certificates {
    width: 45vw;
    height: 55vh;
    background: #233554;

    .sectionUp {
      display: flex;
      flex-direction: row;
      height: 10vh;
      width: 45vw;
      color: white;

      .box {
        width: 10rem;
        height: 10rem;
        background: #fff;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }

  li {
    position: relative;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li:before {
    content: "■";
    position: absolute;
    left: 0px;
    color: black;
    font-size: 1.5rem;
    line-height: 12px;
  }
`;

export default Skills;
