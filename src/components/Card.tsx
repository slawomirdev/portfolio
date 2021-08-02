import React from "react";
import styled from "styled-components";
import { socials } from "../utils/navbarlist";
import emoji from "../assets/emoji.png";

const Card: React.FC = () => {
  return (
    <CardWrapper>
      <ul className="list">
        {socials.map(({ id, text, url }) => {
          return <li key={id}>{text}</li>;
        })}
      </ul>
      <div className="emojiWrapper">
        <img src={emoji} alt="emoji" />
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  height: 60vh;
  background: #233554;
  color: #fff;

  .emojiWrapper {
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
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
  }
`;

export default Card;
