import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerBg: file(relativePath: { eq: "WebsiteTop.jpg" }) {
        childImageSharp {
          resize(width: 1280, quality: 90, toFormat: JPG) {
            src
            width
            height
          }
        }
      }
    }
  `)

  const { src, width, height } = data.headerBg.childImageSharp.resize

  return (
    <header className="bg-green">
      <div className="container mx-auto">
        <img
          src={src}
          alt="Header"
          width={width}
          height={height}
          className="w-full"
        />
      </div>
    </header>
  )
}

export default Header
