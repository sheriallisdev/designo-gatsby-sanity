import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "./Button";
import bgPatternLeaf from "../images/bg-pattern-leaf.svg";
import bgPattern from "../images/bg-pattern-hero-home.svg";

const HeroStyles = styled.section`
  max-width: var(--site-container);
  padding: 80px 24px 0 24px;
  margin: auto;
  color: var(--white);
  background-color: var(--peach);
  background-image: url(${bgPattern});
  background-repeat: no-repeat;
  background-position: top 20% left 10%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding-bottom: 24px;
  }
  .col-2 {
    overflow: hidden;
    height: 540px;
  }

  @media (min-width: 670px) {
    width: calc(100vw - 48px);
    border-radius: 18px;
    background-position: top 20% right -10%;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    text-align: left;
    padding: 0 0 0 95px;
    margin-top: 1.5rem;
    width: calc(var(--site-container) - 36px);
    background-position: right;
    position: relative;

    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 320px;
      left: -165px;
      width: 100%;
      height: 100%;
      background-image: url(${bgPatternLeaf});
      background-repeat: no-repeat;
      z-index: -5;
    }

    .col-1 {
      h1 {
        width: 16ch;
      }
      p {
        width: 45ch;
      }
    }
    .col-2 {
      height: 600px;
      width: 60%;
      img {
        transform: translateX(-50px);
      }
    }
  }
`;

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
    <HeroStyles>
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
    </HeroStyles>
  );
}

export default HomepageHero;
