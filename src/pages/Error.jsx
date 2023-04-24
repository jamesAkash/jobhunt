import React from "react";
import img from "../assets/images/not-found.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Opps! Page not found</h3>
        <p>The page you are searching for cannot found</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
