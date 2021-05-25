import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import bgPatternDesktop from "../images/bg-pattern-hero-desktop.svg";
import bgPatternMobile from "../images/bg-pattern-hero-contact-mobile.svg";

const StyledHeader = styled.header`
  @media (min-width: 670px) {
    padding: 1.5rem;
  }
`;

const StyledContent = styled.div`
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

const Container = styled.div`
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

function ContactHeader() {
  return (
    <StyledHeader>
      <Container>
        <StyledContent>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </StyledContent>
        <ContactForm />
      </Container>
    </StyledHeader>
  );
}

export default ContactHeader;
