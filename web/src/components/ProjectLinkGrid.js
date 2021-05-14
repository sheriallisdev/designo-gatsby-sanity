import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import ProjectLink from "./ProjectLink";

const StyledProjectGrid = styled.div`
  max-width: var(--site-container);
  display: grid;
  margin: auto;
  padding: 100px 1.5rem;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  }
`;

function ProjectLinkGrid() {
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProjectCategory(
        sort: { order: ASC, fields: _createdAt }
      ) {
        nodes {
          title
          slug {
            current
          }
          background {
            asset {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <StyledProjectGrid>
      {data.projects.nodes.map((project) => (
        <ProjectLink
          key={project.slug.current}
          title={project.title}
          slug={project.slug.current}
          bgImage={project.background.asset.url}
        />
      ))}
    </StyledProjectGrid>
  );
}

export default ProjectLinkGrid;