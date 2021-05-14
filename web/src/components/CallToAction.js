import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import bgCallToAction from "../images/bg-pattern-call-to-action.svg";

const CTAStyles = styled.div`
  max-width: var(--site-container);
  width: calc(100vw - 3.75rem);
  background: url(${bgCallToAction}), var(--peach);
  background-size: cover;
  margin: 0 auto;
  margin-top: 8rem;
  color: var(--white);
  text-align: center;
  padding: 3.75rem;
  border-radius: 15px;

  span {
    display: inline-block;
    font-weight: var(--font-weight-medium);
    font-size: 2rem;
    line-height: 1;
    width: 13ch;
    margin-bottom: 1rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  @media (min-width: 670px) {
    background-position: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4.5rem 6rem;
    text-align: left;
  }
`;

const Content = styled.div`
  @media (min-width: 670px) {
    width: 45%;
  }
`;

function CallToAction() {
  const data = useStaticQuery(graphql`
    query {
      ctaData: sanityCta {
        title
        description
        button_label
        button_route
      }
    }
  `);

  const { title, description, button_label, button_route } = data.ctaData;

  return (
    <CTAStyles>
      <Content>
        <span>{title}</span>
        <p>{description}</p>
      </Content>
      <Button label={button_label} route={button_route} primary={true} />
    </CTAStyles>
  );
}

export default CallToAction;
