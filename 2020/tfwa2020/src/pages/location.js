import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const LocationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          resize(width: 1248, quality: 90, toFormat: JPG) {
            src
            width
            height
          }
        }
      }
      locationMap: file(name: { eq: "TFWA_2020_Hotels_Location_Map_101219" }) {
        publicURL
        name
      }
    }
  `)

  const { locationMap, placeholderImage } = data
  const { publicURL, name } = locationMap
  const { src, width, height } = placeholderImage.childImageSharp.resize

  return (
    <Layout>
      <SEO title="Location" />
      <h1>Location Map</h1>
      <a href={publicURL} download={`${name}`}>
        <img
          src={src}
          alt="Map"
          width={width}
          height={height}
          className="w-full"
        />
      </a>
    </Layout>
  )
}

export default LocationPage
