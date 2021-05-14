import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import bgPatternLeaf from "../images/bg-pattern-leaf.svg";
import bgPatternSmallCircle from "../images/bg-pattern-small-circle.svg";

const StyledWorkflowGrid = styled.section`
  max-width: var(--site-container);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding: 0 24px;
    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 124px;
      right: -165px;
      width: 100%;
      height: 595px;
      background-image: url(${bgPatternLeaf});
      background-repeat: no-repeat;
      transform: rotate(180deg);
      z-index: -5;
    }
  }
`;

const StyledWorkFlowItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
  flex-basis: 31%;
  position: relative;
  text-align: center;

  @media (min-width: 670px) {
    flex-direction: row;
    text-align: left;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
    padding: 0;
    text-align: center;
  }
`;

const StyledContent = styled.div`
  h3 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgPatternSmallCircle});
    background-repeat: no-repeat;
    z-index: -1;
  }

  img {
    margin-bottom: 3rem;
    height: 202px;
  }

  @media (min-width: 670px) {
    img {
      margin-bottom: 0;
      margin-right: 3rem;
    }
  }

  @media (min-width: 1200px) {
    img {
      margin-bottom: 3rem;
      margin-right: 0rem;
    }
  }
`;

function WorkflowGrid() {
  const data = useStaticQuery(graphql`
    query {
      allWorkflow: allSanityWorkflow(sort: { order: ASC, fields: _createdAt }) {
        nodes {
          title
          description
          id
          image {
            asset {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <StyledWorkflowGrid>
      {data.allWorkflow.nodes.map((item) => (
        <StyledWorkFlowItem key={item.id}>
          <ImageContainer>
            <img src={item.image.asset.url} alt="" />
          </ImageContainer>
          <StyledContent>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </StyledContent>
        </StyledWorkFlowItem>
      ))}
    </StyledWorkflowGrid>
  );
}

export default WorkflowGrid;
