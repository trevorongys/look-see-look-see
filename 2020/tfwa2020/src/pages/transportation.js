import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const TransportationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      transferBooking: file(
        name: { eq: "TFWA_2020_Form_Airport_Transfer_Booking_v2" }
      ) {
        publicURL
        name
        ext
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Transportation" />
      <h1>Arrival / Departure Transfer</h1>
      <p>
        To make a transfer booking, please fill in the{" "}
        <a
          href={data.transferBooking.publicURL}
          className="btn btn-green"
          download={`${data.transferBooking.name}${data.transferBooking.ext}`}
        >
          TRANSFER BOOKING FORM
        </a>{" "}
        and email it to{" "}
        <a href="mailto:tfwa.ap@pw.pacificworld.com">
          tfwa.ap@pw.pacificworld.com
        </a>
      </p>
      <h1>Shuttle Service</h1>
      <p>
        Scheduled shuttle service will be provided in the morning and evening
        during the event period between the official hotels and Sands Convention
        Centre.
      </p>
    </Layout>
  )
}

export default TransportationPage
