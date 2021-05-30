import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as Styled from "./styles";

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
    <Styled.Grid>
      {data.allWorkflow.nodes.map((item) => (
        <Styled.Item key={item.id}>
          <Styled.ImageContainer>
            <img src={item.image.asset.url} alt="" />
          </Styled.ImageContainer>
          <Styled.Content>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Styled.Content>
        </Styled.Item>
      ))}
    </Styled.Grid>
  );
}

export default WorkflowGrid;
