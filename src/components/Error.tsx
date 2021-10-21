import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const Error: React.FC<{}> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Error;
