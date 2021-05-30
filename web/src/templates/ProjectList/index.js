import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ProjectLink from "../../components/ProjectLink";
import CallToAction from "../../components/CallToAction";
import Seo from "../../components/SEO";
import * as Styled from "./styles";

function ProjectList({ data }) {
  const { category, projects, otherCategories } = data;

  return (
    <>
      <Seo title={category.title} />
      <main>
        <Styled.Container>
          <Styled.CategoryHeader>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
          </Styled.CategoryHeader>
          <Styled.ProjectsContainer>
            {projects.nodes.map((project) => (
              <Styled.ProjectCard key={project.id} href="#">
                <GatsbyImage
                  image={project.image.asset.gatsbyImageData}
                  alt={project.title}
                />
                <div className="description">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </Styled.ProjectCard>
            ))}
          </Styled.ProjectsContainer>
          <Styled.CategoryLinks>
            {otherCategories.nodes.slice(0, 2).map((category) => (
              <ProjectLink
                title={category.title}
                slug={`/projects/${category.slug.current}`}
                bgImage={category.background.asset.url}
                key={category.id}
              />
            ))}
          </Styled.CategoryLinks>
          <CallToAction />
        </Styled.Container>
      </main>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    category: sanityProjectCategory(slug: { current: { eq: $slug } }) {
      title
      description
    }
    projects: allSanityProject(
      filter: { category: { elemMatch: { slug: { current: { eq: $slug } } } } }
    ) {
      nodes {
        title
        description
        id
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    otherCategories: allSanityProjectCategory(
      filter: { slug: { current: { ne: $slug } } }
    ) {
      nodes {
        title
        slug {
          current
        }
        id
        background {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default ProjectList;
