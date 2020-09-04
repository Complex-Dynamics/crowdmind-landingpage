const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const { templateKey } = edge.node.frontmatter;
      if (templateKey === 'hidden') {
        return;
      }
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/screens/${String(templateKey)}/index.js`)
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== 'MarkdownRemark') return;

  const value = createFilePath({ node, getNode });

  createNodeField({
    name: 'slug',
    node,
    value
  });
};
