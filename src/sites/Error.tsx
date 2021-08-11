import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
//images
import error from "../assets/error.png";
//link to
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="section">
        <h1>404</h1>
        <p>The page you are looking for does not exist!</p>
        <img src={error} alt="error" />
        <Link to="/">Go back home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .section {
    height: 80vh;
    width: 80vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    img {
      object-fit: contain;
      height: 20rem;
      width: 20rem;
    }

    h1 {
      font-size: 5rem;
    }

    a {
      background: gray;
      padding: 1rem;
      color: #ffffff;
      font-weight: bold;
      width: max-content;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      border-radius: 5px;
    }

    a:after {
      width: 0;
    }

    a:hover {
      background: black;
    }
  }
`;

export default Error;
