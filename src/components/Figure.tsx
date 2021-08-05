import React from "react";
import styled from "styled-components";

interface Props {
  img: string;
  text: string;
  link: string;
  button: string;
  name: string;
}

const Figure: React.FC<Props> = ({ img, text, link, button, name }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div className="overlay">
        <p>{text}</p>
        <a href={link}>{button}</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 17rem;
  width: 23rem;
  margin: 1rem 1rem;
  border-radius: 12px;
  position: relative;
  border: 3px solid #141c3a;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.45s ease-in-out;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    justify-content: center;

    p {
      padding: 1rem 1rem;
      font-weight: bold;
    }

    a {
      text-decoration: none;
      color: #fff;
      border: 2px solid #7510f7;
      border-radius: 12px;
      padding: 0.5rem;
    }
  }

  .overlay:hover {
    opacity: 1;
    background: #141c3a;
    transition: 0.45s ease-in-out;
  }
`;

export default Figure;
