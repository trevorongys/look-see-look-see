import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

import { useStaticQuery, graphql } from "gatsby"

const AccommodationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataYaml(sort: { fields: title }) {
        edges {
          node {
            title
            path
            id
            from
            featuredImage {
              childImageSharp {
                resize(width: 574, quality: 90, toFormat: JPG) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `)
  const Posts = data.allDataYaml.edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))
  return (
    <Layout>
      <SEO title="Accommodation" />
      <div className="flex flex-wrap">{Posts}</div>
    </Layout>
  )
}

export default AccommodationPage
