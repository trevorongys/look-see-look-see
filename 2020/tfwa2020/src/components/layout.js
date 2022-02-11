/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./nav"
import "../styles/site.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      allDataYaml(sort: { fields: title }) {
        edges {
          node {
            title
            path
          }
        }
      }
    }
  `)

  const nav = [
    { title: `Home`, url: `/` },
    {
      title: `Accommodation`,
      url: `/accommodation`,
      children: data.allDataYaml.edges.map(i => {
        const { title, path } = i.node
        return { title: title, url: path }
      }),
    },
    { title: `Location Map`, url: `/location` },
    { title: `Transportation`, url: `/transportation` },
  ]

  return (
    <>
      <Header />
      <Nav links={nav} />
      <div className="container mx-auto mt-5 mb-32">
        <main className="mx-4">{children}</main>
      </div>
      <footer className="text-center bg-green text-white p-4 fixed bottom-0 w-screen z-40">
        For enquiry, please do not hesitate to contact us at:{" "}
        <a href="mailto:tfwa.ap@pw.pacificworld.com">
          tfwa.ap@pw.pacificworld.com
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
