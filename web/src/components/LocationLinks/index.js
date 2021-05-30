import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Button from "../Button";
import * as Styled from "./styles";

function LocationLink({ country, image, slug }) {
  return (
    <Styled.LocationLink>
      <Styled.ImageWrapper>
        <img src={image} alt={country} />
      </Styled.ImageWrapper>
      <Styled.Title>{country}</Styled.Title>
      <Button route={`locations/#${slug}`} label="See Location" />
    </Styled.LocationLink>
  );
}

function LocationLinks() {
  const data = useStaticQuery(
    graphql`
      query {
        locations: allSanityLocation {
          nodes {
            illustration {
              asset {
                url
              }
            }
            slug {
              current
            }
            country
            id
          }
        }
      }
    `
  );

  return (
    <Styled.LocationsWrapper>
      {data.locations.nodes.map((location) => (
        <LocationLink
          country={location.country}
          image={location.illustration.asset.url}
          slug={location.slug.current}
          key={location.id}
        />
      ))}
    </Styled.LocationsWrapper>
  );
}

export default LocationLinks;
