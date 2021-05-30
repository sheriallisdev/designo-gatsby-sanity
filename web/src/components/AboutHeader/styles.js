import styled from "styled-components";
import bgPatternHero from "../../images/bg-pattern-hero-about-desktop.svg";
import bgPatternLeaf from "../../images/bg-pattern-leaf.svg";

export const Header = styled.header`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;

  h1 {
    margin: 0;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 320px;
  }

  @media (min-width: 670px) {
    padding: 1.5rem;

    .gatsby-image-wrapper {
      border-radius: 15px 15px 0 0;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    position: relative;
    padding-left: 0;
    padding-right: 0;

    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 320px;
      left: -165px;
      width: 1006px;
      height: 594px;
      background-image: url(${bgPatternLeaf});
      background-repeat: no-repeat;
      z-index: -5;
    }

    .gatsby-image-wrapper {
      width: 40%;
      height: 100%;
      border-radius: 0 15px 15px 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.5rem;
  background: url(${bgPatternHero}), var(--peach);
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: top -200px center;
  color: var(--white);
  text-align: center;

  @media (min-width: 670px) {
    border-radius: 0 0 15px 15px;
  }
  @media (min-width: 1200px) {
    border-radius: 15px 0 0 15px;
    flex: 1 1 50%;
    text-align: left;
    padding: 4.875rem;

    h1 {
      align-self: flex-start;
      margin-bottom: 1.5rem;
    }
  }
`;
