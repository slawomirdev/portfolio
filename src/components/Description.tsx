import React, { useState } from "react";
import styled from "styled-components";
import { HiArrowCircleRight } from "react-icons/hi";
import { avatars } from "../utils/emojiArray";

const Description: React.FC = () => {
  const [avatar, setAvatar] = useState(avatars[0]);

  const avatarHandler = () => {
    const avatarid = avatar.id;
    let newid = avatarid + 1;
    if (newid > 4) {
      newid = 0;
    }
    setAvatar(avatars[newid]);
  };

  return (
    <Wrapper>
      <Box>
        <Avatar>
          <img src={avatar.img} alt="emojiHi" />
        </Avatar>
        <HiArrowCircleRight onClick={avatarHandler} />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 12rem;
  width: 15rem;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  padding: 1rem;
`;

const Box = styled.div`
  height: 12rem;
  width: 10rem;
  box-shadow: 0 10px 20px -10px rgb(50 50 93 / 40%), 0 2px 3px rgb(0 0 0 / 4%),
    0 0 1px rgb(0 0 0 / 15%);
  /* padding: 1rem; */
  background: #fff;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    position: absolute;
    z-index: 2;
    height: 2rem;
    width: 2rem;
    top: 80%;
    cursor: pointer;
    color: black;
  }
`;

const Avatar = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 2rem;
  z-index: 2;
  background-image: linear-gradient(
    to right top,
    #f0c7ff,
    #ffb2da,
    #ffae8e,
    #ffc936,
    #a8eb12
  );
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 7rem;
  }
`;

export default Description;
