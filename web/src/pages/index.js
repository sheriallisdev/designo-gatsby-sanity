import * as React from "react";
import CallToAction from "../components/CallToAction";
import HomepageHero from "../components/HomepageHeader";
import ProjectLinkGrid from "../components/ProjectLinkGrid";
import Seo from "../components/SEO";
import WorkflowGrid from "../components/WorkflowGrid";

const IndexPage = () => {
  return (
    <>
      <Seo title="Designo" />
      <HomepageHero />
      <ProjectLinkGrid />
      <WorkflowGrid />
      <CallToAction />
    </>
  );
};

export default IndexPage;
