const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query PostSlugQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach(({ frontmatter }) => {
    createPage({
      path: `/posts/${frontmatter.slug}`,
      component: path.resolve("./src/components/postLayout.js"),
      context: {
        slug: frontmatter.slug,
      },
    });
  });
};
