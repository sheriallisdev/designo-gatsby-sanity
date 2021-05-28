import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import bgPattern from "../images/bg-pattern-two-circles.svg";

const StyledInfoRow = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;

  .gatsby-image-wrapper {
    width: 100%;
    height: 320px;
  }

  @media (min-width: 670px) {
    padding: 1.5rem;
    margin-top: 8.5rem;

    .gatsby-image-wrapper {
      border-radius: 15px 15px 0 0;
    }
  }

  @media (min-width: 1200px) {
    padding-left: 0;
    padding-right: 0;

    &:nth-of-type(3) {
      flex-direction: row-reverse;

      .gatsby-image-wrapper {
        border-radius: 0 15px 15px 0;
      }
      .content {
        border-radius: 15px 0 0 15px;
      }
    }
    .gatsby-image-wrapper {
      width: 40%;
      height: 100%;
      border-radius: 15px 0 0 15px;
    }
  }
`;

const StyledContent = styled.div`
  h2 {
    margin: 0;
    color: var(--peach);
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.5rem;
  color: var(--black);
  text-align: center;
  background: url(${bgPattern}), #fdf3f0;
  background-repeat: no-repeat;
  background-position: bottom left;

  @media (min-width: 670px) {
    border-radius: 0 0 15px 15px;
  }

  @media (min-width: 1200px) {
    flex: 1 1 50%;
    text-align: left;
    min-height: 100%;
    border-radius: 0 15px 15px 0;
    padding: 5.875rem;

    h2 {
      align-self: flex-start;
      margin-bottom: 2rem;
    }
  }
`;

function InfoRow({ title, bodyText, image }) {
  return (
    <StyledInfoRow className="info-row">
      <GatsbyImage image={image} />
      <StyledContent className="content">
        <h2>{title}</h2>
        <p>{bodyText}</p>
      </StyledContent>
    </StyledInfoRow>
  );
}

export default InfoRow;
