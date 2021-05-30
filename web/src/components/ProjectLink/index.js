import React from "react";
import * as Styled from "./styles";
import rightArrow from "../../images/icon-right-arrow.svg";

function ProjectLink({ title, slug, bgImage }) {
  return (
    <Styled.ProjectLink
      to={slug}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h2>{title}</h2>
      <span>
        View Projects
        <img src={rightArrow} alt="" />
      </span>
    </Styled.ProjectLink>
  );
}

export default ProjectLink;
