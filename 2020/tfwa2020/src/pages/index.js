import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "TFWA_2020_Form_Hotel_Group_Reservation_v2" }) {
        publicURL
        name
        ext
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <p>
        TFWA is the largest professional body in global duty free and travel
        retail today. As well as organising industry-leading exhibitions,
        running high-calibre conferences and tracking travellers' wants and
        needs through a comprehensive research programme, TFWA works to promote
        the interests of its members and the wider duty-free and travel-retail
        industry.
      </p>
      <p>
        TFWA Asia Pacific Exhibition & Conference is where duty free and travel
        retail's leading companies meet and interact in the industry's most
        valuable region.
      </p>
      <h1>Accommodation</h1>
      <p>
        Book your accommodation at the official hotels for exclusive rates for
        the event.
      </p>
      <ul>
        <li>
          Rates quoted are on per room per night basis, subject to 10% service
          charge and prevailing Government taxes currently at 7% Goods and
          Services Tax (GST).
        </li>
        <li>Rates are applicable for stay from 07 to 16 May 2020.</li>
        <li>
          Early check-in and late check-out are subject to availability and
          approval by the Hotel Front Desk.
        </li>
        <li>
          Should you wish to check-in before the hotel standard check-in time,
          placing a reservation for the night prior to arrival is recommended
          and a full day charge will be levied.
        </li>
        <li>
          For late check-out between the hotel standard check-out time and
          1800hrs, 50% of room rate will be charged.
        </li>
        <li>
          For late check-out after 1800hrs, 100% of room rate will be charged.
        </li>
      </ul>
      <p>
        For <b>GROUP BOOKING</b>, please fill in this{" "}
        <a
          href={data.file.publicURL}
          className="btn btn-green"
          download={`${data.file.name}${data.file.ext}`}
        >
          GROUP BOOKING FORM
        </a>{" "}
        and email it to{" "}
        <a href="mailto:tfwa.ap@pw.pacificworld.com">
          tfwa.ap@pw.pacificworld.com
        </a>
      </p>
      <p>
        For <b>INDIVIDUAL BOOKING</b>, please click on the following
        participating hotels to select your room.
      </p>
      <p>
        Note: Scheduled shuttle service will be provided during the event period
        between the official hotels and Sands Convention Centre.
      </p>
    </Layout>
  )
}

export default IndexPage
