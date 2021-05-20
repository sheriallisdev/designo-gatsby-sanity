import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import CallToAction from "../components/CallToAction";
import bgPattern from "../images/bg-pattern-two-circles.svg";

const LocationContainer = styled.div`
  max-width: var(--site-container);
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  align-items: center;

  @media (min-width: 670px) {
    margin: 0 auto;
    padding: 1rem;
  }
  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 3rem;
    &:nth-of-type(2n) {
      flex-direction: row;
    }
  }
`;
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bgPattern}), #fdf3f0;
  background-repeat: no-repeat;
  background-position: bottom left;
  min-height: 300px;
  padding: 8rem 1rem;
  width: 100%;

  h2 {
    margin: 0;
    color: var(--peach);
  }

  @media (min-width: 670px) {
    /* flex-basis: 65%; */
    padding-left: 4rem;
    border-radius: 15px;
    max-width: 680px;
    align-items: flex-start;
    padding: 4.75rem;
  }
  @media (min-width: 1200px) {
    align-self: flex-start;
    flex-basis: 65%;
    border-radius: 15px;
    min-height: 300px;
  }
`;

const ContactRow = styled.div`
  margin-top: 1.5rem;

  text-align: center;

  span {
    display: block;
  }

  .title {
    font-weight: var(--font-weight-medium);
  }
  @media (min-width: 670px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    align-self: flex-end;
    padding-right: 4rem;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 670px) {
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const Map = styled.div`
  width: 100%;
  margin: 0;
  height: 300px;
  img {
    margin: 0;
    /* height: 300px; */
    object-fit: cover;
  }
  @media (min-width: 670px) {
    max-width: 680px;
    margin-bottom: 3rem;
    img {
      border-radius: 15px;
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    width: 30%;
    margin-bottom: 0;
    img {
      height: 300px;
    }
  }
`;

const LocationsPage = ({ data }) => {
  console.log(data.locations.nodes);

  return (
    <main>
      {data.locations.nodes.map((location) => (
        <LocationContainer key={location.id} id={location.country}>
          <Map>
            <img
              src={location.map_image_landscape.asset.url}
              alt={`map of ${location.office_name}`}
            />
          </Map>
          <ContactDetails>
            <h2>{location.country}</h2>
            <ContactWrapper>
              <ContactRow>
                <span className="title">{location.office_name}</span>
                <span>{location.address_line1}</span>
                <span>{location.address_line2}</span>
              </ContactRow>
              <ContactRow>
                <span className="title">Contact</span>
                <span>P: {location.phone}</span>
                <span>M: {location.email}</span>
              </ContactRow>
            </ContactWrapper>
          </ContactDetails>
        </LocationContainer>
      ))}
      <CallToAction />
    </main>
  );
};

export const query = graphql`
  query {
    locations: allSanityLocation {
      nodes {
        slug {
          current
        }
        phone
        office_name
        map_image_landscape {
          asset {
            url
          }
        }
        map_image {
          asset {
            url
          }
        }
        id
        email
        country
        address_line2
        address_line1
        coordinates {
          alt
          lat
          lng
        }
      }
    }
  }
`;

export default LocationsPage;
