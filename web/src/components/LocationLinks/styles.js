import styled from "styled-components";
import bgPatternSmallCircle from "../../images/bg-pattern-small-circle.svg";
import bgPatternLeaf from "../../images/bg-pattern-leaf.svg";

export const LocationsWrapper = styled.div`
  max-width: var(--site-container);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  margin-top: 4rem;
  margin-bottom: 7rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 7rem;
    position: relative;
    padding-left: 0;
    padding-right: 0;
    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 180px;
      left: 667px;
      width: 1006px;
      height: 594px;
      background-image: url(${bgPatternLeaf});
      background-repeat: no-repeat;
      z-index: -5;
    }
  }
`;

export const LocationLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.875rem;

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const ImageWrapper = styled.div`
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
    padding: 0.6rem;
    width: 202px;
    height: 202px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
  margin-top: 3rem;
`;
