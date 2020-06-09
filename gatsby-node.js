const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateWebpackConfig = ({
  stage, loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, filter: {frontmatter: {collection: {eq: "work"}}}) {
        nodes {
          fields {
            slug
          }
          id
          frontmatter {
            client
            collection
            discipline
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      // eslint-disable-next-line no-undef
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.nodes
    posts.forEach((edge) => {
      console.log(edge.fields.slug);
      const id = edge.id;
      createPage({
        path: edge.fields.slug,
        discipline: edge.frontmatter.discipline,
        component: path.resolve(
          `src/templates/${String(edge.frontmatter.collection)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let discipline = []
    // Iterate through each post, putting all found discipline into `discipline`
    posts.forEach((edge) => {
      if (_.get(edge, 'frontmatter.discipline')) {
        discipline = discipline.concat(edge.frontmatter.discipline)
      }
    })
    // Eliminate duplicate discipline
    discipline = _.uniq(discipline)

    // Make tag pages
    discipline.forEach((tag) => {
      const tagPath = `/discipline/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve('src/templates/discipline.js'),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}