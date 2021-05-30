import styled from "styled-components";
import bgPatternDesktop from "../../images/bg-pattern-hero-desktop.svg";
import bgPatternMobile from "../../images/bg-pattern-hero-contact-mobile.svg";

export const Header = styled.header`
  @media (min-width: 670px) {
    padding: 1.5rem;
  }
`;

export const Content = styled.div`
  text-align: center;
  margin-bottom: 1.6rem;

  h1 {
    margin: 0;
  }

  @media (min-width: 670px) {
    text-align: left;

    h1 {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1200px) {
    flex: 1 1 40%;
    justify-content: center;
    display: flex;
    flex-direction: column;

    p {
      width: 46ch;
    }
  }
`;

export const Container = styled.div`
  max-width: var(--site-container);
  padding: 4.5rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  background: url(${bgPatternMobile}), var(--peach);
  background-position: top 0% left 0%;
  color: var(--white);

  @media (min-width: 670px) {
    border-radius: 15px;
    background: url(${bgPatternDesktop}), var(--peach);
    background-repeat: no-repeat;
    background-position: top -60% left -60%;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    padding: 3.5rem 6rem;
    background-position: top 0% left 0%;
  }
`;
