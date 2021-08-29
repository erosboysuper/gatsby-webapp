// path is preinstalled with node
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
      query {
        services: allContentfulServices {
          edges {
            node {
              slug
            }
          }
        }
        posts: allContentfulPost {
          edges{
            node{
              slug
            }
          }
        }
        jobs: allContentfulJobOpenings {
          nodes {
            slug
          }
        }
      }
    `)

  console.log("#########")
  console.log(JSON.stringify(result))
  console.log("#########")
  // iterate over the node array, use forEach() to loop over it. 
  result.data.services.edges.forEach(({ node }) => {
    createPage({
      path: `services/${node.slug}`,
      component: path.resolve("./src/templates/ServiceTemplate/index.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/BlogTemplate/index.js"),
      context: {
        slug: node.slug
      },
    })
  })
  // for each iteration create a page using createPage()
  result.data.jobs.nodes.forEach((job) => {
    createPage({
      path: `jobs/${job.slug}`,
      component: path.resolve(`src/templates/JobTemplate/index.js`),
      context: {
        slug: job.slug,
      }
    })
  })
}