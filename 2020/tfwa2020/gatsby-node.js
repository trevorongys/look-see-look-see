/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const accommodationTemplate = path.resolve(`src/templates/accommodation.js`)
  const result = await graphql(`
    {
      allDataYaml(sort: { fields: title }) {
        edges {
          node {
            path
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allDataYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: accommodationTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
