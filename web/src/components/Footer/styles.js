import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: -6rem;
  padding-top: 12rem;
  background-color: var(--black);
  color: var(--white);
  width: 100%;
  text-align: center;
  @media (min-width: 670px) {
    margin-top: -1rem;
    padding-top: 5rem;
  }
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--site-container);
  padding: 1.5rem;
  @media (min-width: 670px) {
    padding: 3.75rem 1.5rem;
  }
  @media (min-width: 1200px) {
    padding: 3.75rem 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 27px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-top: 2rem;
  }

  a {
    color: var(--white);
    text-transform: uppercase;
    font-size: 0.875rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 670px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--dark-grey);
    padding-bottom: 2.875rem;

    ul {
      display: flex;
      align-items: center;
    }

    li {
      margin-top: 0;
      margin-left: 2.625rem;
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--dark-grey);
  padding: 2rem;
  @media (min-width: 670px) {
    width: auto;
    padding: 0;
    border-bottom: none;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(241, 243, 245, 0.5);
  margin-bottom: 2rem;

  h4 {
    margin-bottom: 0;
  }

  .phone,
  .email {
    font-weight: var(--font-weight-medium);
  }

  @media (min-width: 670px) {
    text-align: left;
    margin-bottom: 0;
    margin-top: 1rem;
  }
`;

export const SocialsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
  margin: 40px auto;
  padding-left: 0;

  a:hover,
  a:focus {
    filter: brightness(1.4);
  }

  @media (min-width: 670px) {
    margin-right: 0;
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

export const ContactWrapper = styled.div`
  @media (min-width: 670px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
