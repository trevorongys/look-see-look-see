import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { dataYaml } = data // data.dataYaml holds your post data
  const {
    title,
    featuredImage1,
    featuredImage2,
    rooms,
    distance,
    note,
    booking,
    terms,
  } = dataYaml
  return (
    <Layout>
      <SEO title={title} />
      <div className="relative hidden md:block">
        <div className="flex flex-row">
          <div className="flex-grow flex items-center w-1/2">
            <h1 className="text-black text-2xl m-auto text-center max-w-xs pl-16 pr-8">
              {title}
            </h1>
          </div>
          <img
            src={featuredImage1.childImageSharp.resize.src}
            className="w-1/2"
            alt={title}
            width={featuredImage1.childImageSharp.resize.width}
            height={featuredImage1.childImageSharp.resize.height}
          />
        </div>
        <div
          className="m-8 border-solid border border-black h-64 absolute top-0"
          style={{ width: `calc(100% - 64px)`, height: `calc(100% - 64px)` }}
        ></div>
      </div>
      <div className="my-8 md:hidden">
        <h1 className="text-black text-2xl m-auto text-center my-16">
          {title}
        </h1>
        <img
          src={featuredImage1.childImageSharp.resize.src}
          alt={title}
          width={featuredImage1.childImageSharp.resize.width}
          height={featuredImage1.childImageSharp.resize.height}
          className="w-full"
        />
      </div>
      <div className="flex flex-wrap my-8">
        <div className="w-full md:w-1/3 mb-8">
          <img
            src={featuredImage2.childImageSharp.resize.src}
            alt={title}
            width={featuredImage2.childImageSharp.resize.width}
            height={featuredImage2.childImageSharp.resize.height}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-8 py-2 text-left border-solid border-t-2 border-b-2 border-black">
                  Room Type
                </th>
                <th className="px-8 py-2 text-left border-solid border-t-2 border-b-2 border-black">
                  Rates Without Breakfast
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map(i => (
                <tr key={i.type}>
                  <td className="px-8 py-2 border-solid border-b border-black">
                    {i.type}
                  </td>
                  <td className="px-8 py-2 border-solid border-b border-black">
                    SGD {i.rate}.00++
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-8 py-2">
            Distance to Sands Convention Centre: {distance}
          </p>
          {note ? <p className="px-8 py-2">{note}</p> : ""}
        </div>
      </div>
      <div className="text-sm">
        <h2 className="uppercase px-5 py-1 border-solid border-2 border-black font-bold inline-block">
          Terms & Conditions:
        </h2>
        <div className="terms-and-conditions flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-2">
            <h3>Room Rates</h3>
            <ul>
              {terms.roomRates.map(i => (
                <li dangerouslySetInnerHTML={{ __html: i }} />
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-2">
            <h3>Extra</h3>
            <ul>
              {terms.extra.map(i => (
                <li dangerouslySetInnerHTML={{ __html: i }} />
              ))}
            </ul>
            <h3>No-Show and Cancellation Charges</h3>
            <ul>
              {terms.noShow.map(i => (
                <li dangerouslySetInnerHTML={{ __html: i }} />
              ))}
            </ul>
            <h3>Arrival and Departure</h3>
            <ul>
              {terms.arrival.map(i => (
                <li dangerouslySetInnerHTML={{ __html: i }} />
              ))}
            </ul>
            {terms.promo ? (
              <p className="pt-8">
                Please enter the promotional code 'TFWA2020' to enjoy the above
                mentioned rate.
              </p>
            ) : (
              ""
            )}
            {booking.length > 0 ? (
              <a
                href={booking}
                className="btn btn-red text-lg px-8 my-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK NOW
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    dataYaml(path: { eq: $path }) {
      path
      title
      rooms {
        type
        rate
      }
      distance
      note
      booking
      terms {
        roomRates
        extra
        noShow
        arrival
        promo
      }
      featuredImage1 {
        childImageSharp {
          resize(width: 736, quality: 90, toFormat: JPG) {
            src
            width
            height
          }
        }
      }
      featuredImage2 {
        childImageSharp {
          resize(width: 768, quality: 90, toFormat: JPG) {
            src
            width
            height
          }
        }
      }
    }
  }
`
