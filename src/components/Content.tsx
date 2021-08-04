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
          Hello! I'm Sławomir Mendyka, from Poland, student and great developer.
        </p>
        <p>
          I am a creative, time punctual, dedicated, goal-oriented individual
          with decent moral Values and Ethicates along with a high-energy level,
          honed communication skills, strong organizational skills, and
          meticulous attention to detail.
        </p>
        <p>
          I live in a small town between Poznań and Wrocław but I love traveling
          and I want to take opportunities and travel around the world. That's
          why I'm grateful for remote work in this field. I always strive to
          develop myself and the people around me. That's why in Vocational
          Technical High School we created this little team to participate in
          competitions. It was a great opportunity to learn some teamwork and
          work on a little bit more professional projects.
        </p>
        <p>
          Apart from this, I'm constantly developing myself taking courses on
          Udemy or on similar platforms that's help to understand new
          technologies and become a better React developer. If you want to see
          my certificates go to the certificates tab in the navigation.
        </p>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80vh;
  width: 55vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: red; */
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
`;

export default Content;
