import React from "react";
import styled from "styled-components";
import CardAbout from "./CardAbout";
import Description from "./Description";

const Content: React.FC = () => {
  return (
    <Wrapper>
      <Description />
      <CardAbout />
      <Info>
        <p>
          Hey there! Let me introduce myself again, my name is Sławomir Mendyka,
          and I am a Frontend developer. I am a twenty years old student at WSB
          University in Poznań, currently studying Computer Science.
        </p>
        <p>
          I am a creative and time punctual. My go-to programming language is
          JavaScript. When it comes to programming I enjoy the challenging stuff
          and always try to find the right solution for a problem.
        </p>
        <p>
          I live in a small town between Poznań and Wrocław. Programming became
          my passion at Vocational Technical High School. Together with a team
          from school we took part in programming competitions. It was a great
          experience to work in a group and learn from others.
        </p>
        <p>
          Apart from this, I spent most of my time to build my web development
          skill through self learning from online resources such as freeCodeCamp
          or Udemy.
        </p>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
  /* background: red; */

  @media only screen and (max-width: 1440px) {
    width: 100vw;
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    width: 100vw;
    height: auto;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 1rem 1rem;
  p {
    padding: 0.5rem;
    letter-spacing: 0.1rem;
  }

  @media only screen and (max-width: 1440px) {
    width: 90vw;
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    width: 90vw;
    height: auto;
  }
`;

export default Content;
