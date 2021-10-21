/* tslint:disable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Figure from "./Figure";
// import { projects } from "../utils/figureList";
import axios from "axios";

export const query = `
         {
          allProjects{
             name
             text
             link
             button
             img{
               url
               alt
                }
             id
                      }
        }
      `;

const Projects: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then((data: any) => {
        setProjects(data.data.data.allProjects);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong...");
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <h1>My Recent Work</h1>
      <p>Here are a few project I've worked on recently.</p>
      <div className="container">
        {loading && <h1>loading...</h1>}
        {projects.map((item, index) => {
          return <Figure key={index} {...item} />;
        })}
        {error.length > 1 && <h2>{error}</h2>}
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

  p {
    padding: 0rem 1rem;
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
