import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as Styled from "./styles";

function InfoRow({ title, bodyText, image }) {
  return (
    <Styled.Container className="info-row">
      <GatsbyImage image={image} alt="" />
      <Styled.Content className="content">
        <h2>{title}</h2>
        <p>{bodyText}</p>
      </Styled.Content>
    </Styled.Container>
  );
}

export default InfoRow;
