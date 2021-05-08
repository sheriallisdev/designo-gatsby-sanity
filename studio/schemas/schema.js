// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity

import hero from "./hero";
import workflow from "./workflow";
import cta from "./cta";
import socials from "./socials";
import project_category from "./project-category";
import project from "./project";

export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    hero,
    workflow,
    cta,
    socials,
    project_category,
    project,
  ]),
});
