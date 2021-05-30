import styled from "styled-components";
import bgPatternCategory from "../../images/bg-pattern-project-category.svg";

export const CategoryHeader = styled.header`
  max-width: var(--site-container);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bgPatternCategory}), var(--peach);
  background-position: right;
  color: var(--white);
  text-align: center;
  padding: 6.25rem 1.5rem;
  margin-bottom: 9rem;
  width: 100%;

  p {
    max-width: 40ch;
  }

  h1 {
    margin: 0;
  }

  @media (min-width: 670px) {
    margin: 2rem auto;
    border-radius: 15px;
    width: calc(100vw - 3rem);
  }

  @media (min-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ProjectCard = styled.a`
  width: calc(100vw - 3rem);
  margin-top: 2.5rem;
  text-decoration: none;

  .gatsby-image-wrapper {
    border-radius: 15px 15px 0 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.25rem;
    color: var(--peach);
    letter-spacing: 5px;
  }

  .description {
    background-color: #fdf3f0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 15px 15px;
    padding: 1.875rem;
    transform: translateY(-10px);
  }

  p {
    margin-top: 0;
    color: var(--black);
  }

  &:hover,
  &:focus {
    .description {
      background-color: var(--peach);
    }

    h2 {
      color: var(--white);
    }

    p {
      color: var(--white);
    }
  }

  @media (min-width: 670px) {
    display: flex;

    .gatsby-image-wrapper {
      border-radius: 15px 0 0 15px;
    }

    .description {
      border-radius: 0 15px 15px 0;
      transform: translateY(0);
    }
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    width: fit-content;

    .gatsby-image-wrapper {
      border-radius: 15px 15px 0 0;
    }

    .description {
      border-radius: 0 0 15px 15px;
    }
  }
`;

export const ProjectsContainer = styled.section`
  max-width: var(--site-container);
  display: grid;
  grid-template-columns: 1fr;
  margin: 3.75rem auto 8rem auto;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.6rem;
    /* max-width: calc(var(--site-container) - 3rem); */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryLinks = styled.div`
  max-width: var(--site-container);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 4rem;
  a {
    width: 100%;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    margin-left: 0;
    justify-content: space-between;
    a {
      width: calc(50% - 8px);
    }
  }
`;
