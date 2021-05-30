import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as Styled from "./styles";
import Logo from "../Logo";

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
    <Styled.Footer>
      <Styled.InnerWrapper>
        <Styled.Nav>
          <Styled.LogoWrapper>
            <Link to="/">
              <Logo variant="light" alt="Designo logo" />
            </Link>
          </Styled.LogoWrapper>
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
        </Styled.Nav>
        <Styled.ContactWrapper>
          <Styled.ContactRow>
            <h4>Designo {office_name}</h4>
            <span>{address_line1}</span>
            <span>{address_line2}</span>
          </Styled.ContactRow>
          <Styled.ContactRow>
            <h4>Contact Us ({office_name})</h4>
            <span className="phone">P: {phone}</span>
            <span className="email">M: {email}</span>
          </Styled.ContactRow>
          <Styled.SocialsList>
            {data.socials.nodes.map((item) => (
              <li key={item.title} aria-labelledby={`${item.title}-label`}>
                <span id={`${item.title}-label`} hidden>
                  {item.title}
                </span>
                <a href={item.link}>
                  <img src={item.icon.asset.url} alt="" aria-hidden="true" />
                </a>
              </li>
            ))}
          </Styled.SocialsList>
        </Styled.ContactWrapper>
      </Styled.InnerWrapper>
    </Styled.Footer>
  );
};

export default Footer;
