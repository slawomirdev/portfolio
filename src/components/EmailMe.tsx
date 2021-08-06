import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import styled from "styled-components";

const EmailMe = () => {
  return (
    <Wrapper href="mailto:mendyka.slawomir@gmail.com">
      <HiOutlineMail />
      Email me
    </Wrapper>
  );
};

const Wrapper = styled.a`
  background: transparent;
  padding: 1rem;
  color: #ffffff;
  font-weight: bold;
  border: 1px solid #fff;
  width: max-content;
  margin-top: 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
  }

  &:after {
    height: 0px;
  }

  &:hover {
    background: #fff;
    color: black;
  }
`;

export default EmailMe;
