const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create project category pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectListTemplate = path.resolve(
    `src/templates/ProjectList/index.js`
  );
  const result = await graphql(`
    query MyQuery {
      categories: allSanityProjectCategory {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);
  result.data.categories.edges.forEach((category) => {
    createPage({
      path: `projects/${category.node.slug.current}`,
      component: projectListTemplate,
      context: {
        slug: category.node.slug.current,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /offending-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
