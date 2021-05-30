import styled from "styled-components";
import bgPatternLeaf from "../../images/bg-pattern-leaf.svg";
import bgPattern from "../../images/bg-pattern-hero-home.svg";

export const Hero = styled.section`
  max-width: var(--site-container);
  padding: 80px 24px 0 24px;
  margin: auto;
  color: var(--white);
  background-color: var(--peach);
  background-image: url(${bgPattern});
  background-repeat: no-repeat;
  background-position: top 20% left 10%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding-bottom: 24px;
  }
  .col-2 {
    overflow: hidden;
    height: 540px;
  }

  @media (min-width: 670px) {
    width: calc(100vw - 48px);
    border-radius: 18px;
    background-position: top 20% right -10%;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    text-align: left;
    padding: 0 0 0 95px;
    margin-top: 1.5rem;
    background-position: right;
    position: relative;

    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 320px;
      left: -165px;
      width: 100%;
      height: 100%;
      background-image: url(${bgPatternLeaf});
      background-repeat: no-repeat;
      z-index: -5;
    }

    .col-1 {
      h1 {
        width: 16ch;
      }
      p {
        width: 45ch;
      }
    }
    .col-2 {
      height: 600px;
      width: 60%;
      img {
        transform: translateX(-50px);
      }
    }
  }
`;
