exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/blog.jsx`);
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { allMdx } = result.data;

  allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.date}-${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
