import styled from "styled-components";
import bgCallToAction from "../../images/bg-pattern-call-to-action.svg";

export const Container = styled.div`
  max-width: var(--site-container);
  width: calc(100vw - 3.75rem);
  background: url(${bgCallToAction}), var(--peach);
  background-size: cover;
  margin: 0 auto;
  margin-top: 1rem;
  color: var(--white);
  text-align: center;
  padding: 3.75rem;
  border-radius: 15px;
  z-index: 6;
  transform: translateY(4.5rem);

  span {
    display: inline-block;
    font-weight: var(--font-weight-medium);
    font-size: 2rem;
    line-height: 1;
    width: 13ch;
    margin-bottom: 1rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  @media (min-width: 670px) {
    background-position: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4.5rem 6rem;
    text-align: left;
  }
`;

export const Content = styled.div`
  @media (min-width: 670px) {
    width: 45%;
  }
`;
