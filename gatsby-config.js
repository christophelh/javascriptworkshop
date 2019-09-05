module.exports = {
  siteMetadata: {
    title: `Javascript workshop`,
    name: `David Leuliette`,
    siteUrl: `opentechcamp.com`,
    description: `Free javascript presentation`,
    author: `Christophe Honore`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Perspectives on technology, design and business from the team at Narative.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/opentechcamp`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/opentechcamp/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
    'gatsby-plugin-theme-ui',
    'gatsby-theme-mdx-deck',
  ],
};
