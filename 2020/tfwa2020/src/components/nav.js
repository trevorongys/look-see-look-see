import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Dropdown from "./dropdown"

const Nav = ({ links }) => {
  return (
    <nav className="mt-3 ml-2 md:text-sm lg:text-lg">
      <ul className="flex flex-wrap container mx-auto">
        {links.map(i => (
          <li className="w-full md:w-1/4 pr-2 mb-2" key={i.title}>
            {i.children ? (
              <>
                <Link
                  to={i.url}
                  className="lg:text-center inline-block py-2 px-4 bg-green text-white uppercase w-3/4"
                >
                  {i.title}
                </Link>
                <Dropdown>
                  <ul className="bg-white border-solid border-t-2 border-black z-50">
                    {i.children.map(j => (
                      <li key={j.title}>
                        <Link
                          to={j.url}
                          className="block py-2 px-4 border-solid border-2 border-t-0 border-black uppercase hover:text-white hover:bg-green text-sm"
                        >
                          {j.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Dropdown>
              </>
            ) : (
              <Link
                to={i.url}
                key={i.title}
                className="lg:text-center block py-2 px-4 bg-green text-white uppercase"
              >
                {i.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  links: PropTypes.array,
}

Nav.defaultProps = {
  links: [
    { title: `Home`, url: `/` },
    {
      title: `Accommodation`,
      url: `/accommodation`,
      children: [
        { title: `Conrad Centennial Singapore`, url: `/conrad` },
        { title: `Grand Park City Hall`, url: `/grand` },
        { title: `JW Marriott Hotel Singapore South Beach`, url: `/jw` },
      ],
    },
    { title: `Location Map`, url: `/location` },
    { title: `Transportation`, url: `/transportation` },
  ],
}

export default Nav
