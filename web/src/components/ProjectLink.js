import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import rightArrow from "../images/icon-right-arrow.svg";

const StyledProjectLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  text-decoration: none;
  color: var(--white);
  text-align: center;
  padding: 90px 24px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 1.5rem;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 15px;
  }
  &:hover,
  &:focus {
    &::before {
      background: rgba(231, 129, 107, 0.8);
    }
  }
  h2 {
    text-transform: uppercase;
    margin: 0;
    font-size: 1.75rem;
  }
  span {
    margin-top: 12px;
    text-transform: uppercase;

    img {
      margin-left: 20px;
    }
  }
  h2,
  span {
    z-index: 2;
  }
  &:first-child {
    grid-column: 1;
    grid-row: 1/3;
  }
  @media (min-width: 670px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

function ProjectLink({ title, slug, bgImage }) {
  return (
    <StyledProjectLink
      to={`projects/${slug}`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h2>{title}</h2>
      <span>
        View Projects
        <img src={rightArrow} alt="" />
      </span>
    </StyledProjectLink>
  );
}

export default ProjectLink;
