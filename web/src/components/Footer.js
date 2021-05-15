import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  margin-top: -12rem;
  padding-top: 14rem;
  background-color: var(--black);
  color: var(--white);
  position: absolute;
  z-index: -9;
  width: 100%;
  text-align: center;
`;

const InnerWrapper = styled.div`
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

const FooterNav = styled.nav`
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

const LogoWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--dark-grey);
  padding: 2rem;
  @media (min-width: 670px) {
    width: auto;
    padding: 0;
    border-bottom: none;
  }
`;

const ContactRow = styled.div`
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

const SocialsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
  margin: 40px auto;
  padding-left: 0;

  @media (min-width: 670px) {
    margin-right: 0;
    margin-bottom: 0;
    align-items: flex-end;
  }
`;

const ContactWrapper = styled.div`
  @media (min-width: 670px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      location: sanityLocation(office_name: { eq: "Central Office" }) {
        country
        email
        phone
        office_name
        address_line1
        address_line2
      }
      socials: allSanitySocials {
        nodes {
          icon {
            asset {
              url
            }
          }
          link
          title
        }
      }
    }
  `);

  const {
    email,
    phone,
    office_name,
    address_line1,
    address_line2,
  } = data.location;

  return (
    <StyledFooter>
      <InnerWrapper>
        <FooterNav>
          <LogoWrapper>
            <Link to="/">
              <Logo variant="light" alt="Designo logo" />
            </Link>
          </LogoWrapper>
          <ul>
            <li>
              <Link to="/about">Our Company</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </FooterNav>
        <ContactWrapper>
          <ContactRow>
            <h4>Designo {office_name}</h4>
            <span>{address_line1}</span>
            <span>{address_line2}</span>
          </ContactRow>
          <ContactRow>
            <h4>Contact Us ({office_name})</h4>
            <span className="phone">P: {phone}</span>
            <span className="email">M: {email}</span>
          </ContactRow>
          <SocialsList>
            {data.socials.nodes.map((item) => (
              <li key={item.title}>
                <a href={item.link}>
                  <img src={item.icon.asset.url} alt={item.title} />
                </a>
              </li>
            ))}
          </SocialsList>
        </ContactWrapper>
      </InnerWrapper>
    </StyledFooter>
  );
};

export default Footer;
