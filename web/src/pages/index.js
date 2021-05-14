import * as React from "react";
import HomepageHero from "../components/HomepageHero";
import ProjectLinkGrid from "../components/ProjectLinkGrid";
import WorkflowGrid from "../components/WorkflowGrid";

const IndexPage = () => {
  return (
    <main>
      <HomepageHero />
      <ProjectLinkGrid />
      <WorkflowGrid />
    </main>
  );
};

export default IndexPage;
