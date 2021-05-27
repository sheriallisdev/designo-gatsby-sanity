module.exports = {
  siteMetadata: {
    title: "Designo",
    description:
      "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. ",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "pc8s19ha",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
