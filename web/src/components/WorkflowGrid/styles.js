import styled from "styled-components";
import bgPatternLeaf from "../../images/bg-pattern-leaf.svg";
import bgPatternSmallCircle from "../../images/bg-pattern-small-circle.svg";

export const Grid = styled.section`
  max-width: var(--site-container);
  margin: 0 auto;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding-left: 0;
    padding-right: 0;
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

export const Item = styled.article`
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

export const Content = styled.div`
  h3 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div`
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
