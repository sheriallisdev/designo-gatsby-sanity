import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as Styled from "./styles";

function AboutHeader({ title, description, image }) {
  return (
    <Styled.Header>
      <GatsbyImage image={image} />
      <Styled.Content>
        <h1>{title}</h1>
        <p>{description}</p>
      </Styled.Content>
    </Styled.Header>
  );
}

export default AboutHeader;
