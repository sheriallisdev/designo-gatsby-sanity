import * as React from "react";
import { graphql } from "gatsby";
import AboutHeader from "../components/AboutHeader";
import InfoRow from "../components/InfoRow";
import CallToAction from "../components/CallToAction";
import styled from "styled-components";
import LocationLinks from "../components/LocationLinks";

const Wrapper = styled.div`
  max-width: var(--site-container);
  margin-left: auto;
  margin-right: auto;
  /* padding: 1.5rem; */
`;

const AboutPage = ({ data }) => {
  console.log();

  return (
    <main>
      <Wrapper>
        <AboutHeader
          title={data.about.title}
          description={data.about.description}
          image={data.about.image.asset.gatsbyImageData}
        />
        <InfoRow
          title={data.about.informationRow[0].title}
          bodyText={data.about.informationRow[0].bodyText}
          image={data.about.informationRow[0].image.asset.gatsbyImageData}
        />
        <LocationLinks />
        <InfoRow
          title={data.about.informationRow[1].title}
          bodyText={data.about.informationRow[1].bodyText}
          image={data.about.informationRow[1].image.asset.gatsbyImageData}
        />
        <CallToAction />
      </Wrapper>
    </main>
  );
};

export const query = graphql`
  query {
    about: sanityAbout {
      title
      id
      image {
        asset {
          gatsbyImageData
        }
      }
      description
      informationRow {
        bodyText
        title
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default AboutPage;
