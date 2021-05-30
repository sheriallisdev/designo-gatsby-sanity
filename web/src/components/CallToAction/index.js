import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as Styled from "./styles";
import Button from "../Button";

function CallToAction() {
  const data = useStaticQuery(graphql`
    query {
      ctaData: sanityCta {
        title
        description
        button_label
        button_route
      }
    }
  `);

  const { title, description, button_label, button_route } = data.ctaData;

  return (
    <Styled.Container>
      <Styled.Content>
        <span>{title}</span>
        <p>{description}</p>
      </Styled.Content>
      <Button label={button_label} route={button_route} primary={true} />
    </Styled.Container>
  );
}

export default CallToAction;
