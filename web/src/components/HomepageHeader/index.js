import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../Button";
import * as Styled from "./styles";

function HomepageHero() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      heroData: sanityHeroSection {
        button_label
        body
        title
        image {
          asset {
            gatsbyImageData(width: 624, layout: FIXED)
          }
        }
      }
    }
  `);

  return (
    <Styled.Hero>
      <div className="col-1">
        <h1>{data.heroData.title}</h1>
        <p>{data.heroData.body}</p>
        <Button
          route="about"
          label={data.heroData.button_label}
          primary={true}
        />
      </div>
      <div className="col-2">
        <GatsbyImage image={data.heroData.image.asset.gatsbyImageData} alt="" />
      </div>
    </Styled.Hero>
  );
}

export default HomepageHero;
