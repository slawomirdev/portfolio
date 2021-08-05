/* tslint:disable */
import React from "react";
import styled from "styled-components";
import Figure from "./Figure";
import { projects } from "../utils/figureList";

const Projects: React.FC = () => {
  return (
    <Wrapper>
      <h1>My Recent Work</h1>
      <p>Here are a few project I've worked on recently.</p>
      <div className="container">
        {projects.map((item, index) => {
          return <Figure key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    padding: 1rem;
  }

  .container {
    width: 90vw;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export default Projects;
