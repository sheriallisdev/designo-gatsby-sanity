import * as React from "react";
import CallToAction from "../components/CallToAction";
import HomepageHero from "../components/HomepageHero";
import ProjectLinkGrid from "../components/ProjectLinkGrid";
import SEO from "../components/SEO";
import WorkflowGrid from "../components/WorkflowGrid";

const IndexPage = () => {
  return (
    <>
      <SEO title="Designo" />
      <HomepageHero />
      <ProjectLinkGrid />
      <WorkflowGrid />
      <CallToAction />
    </>
  );
};

export default IndexPage;
