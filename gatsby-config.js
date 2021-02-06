module.exports = {
  siteMetadata: {
    title: "Jenyus Org",
    description: "Fullstack software firm looking to revolutionize education.",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jenyus Org",
        short_name: "Jenyus",
        description:
          "Fullstack software firm looking to revolutionize education.",
        lang: "en",
        start_url: "/",
        background_color: "#F9FAFB",
        theme_color: "#362C40",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
