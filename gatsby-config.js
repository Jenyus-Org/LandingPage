require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Jenyus Org",
    description: "Fullstack software firm looking to revolutionize education.",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
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
        icon: "src/images/jenyus.svg",
      },
    },
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
        name: "images",
        path: "./images/",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./blog/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "panda",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              showCaptions: ["alt", "title"],
              // markdownCaptions: true,
              wrapperStyle: `text-align: center;margin: 1rem 0;`,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBZXQRLjcGXLKNS4oxp0PaOhEomQhXAvB4",
          authDomain: "landing-page-97297.firebaseapp.com",
          databaseURL: "https://landing-page-97297.firebaseio.com",
          projectId: "landing-page-97297",
          storageBucket: "landing-page-97297.appspot.com",
          messagingSenderId: "377000971925",
          appId: "1:377000971925:web:ba3223e69c716f2ab0d59c",
          measurementId: "G-BGPCGEJ43D",
        },
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
