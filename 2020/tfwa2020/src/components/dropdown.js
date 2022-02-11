import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"

const Dropdown = ({ children }) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <button
        onClick={() => setActive(!active)}
        className="inline-block w-1/4 text-center bg-green text-white py-2 border-solid border-l-2 border-white"
        aria-label={"dropdown"}
      >
        <FontAwesomeIcon
          icon={active ? faCaretUp : faCaretDown}
          style={{ height: "1em" }}
        />
      </button>
      <div className={!active ? "hidden" : "md:hidden"}>{children}</div>
      <div className={!active ? "hidden" : "hidden md:block absolute z-50"}>{children}</div>
    </>
  )
}

export default Dropdown
