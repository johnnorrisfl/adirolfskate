import React from "react"
import { Link } from "gatsby"

const NavLinks = ({ isOpen }) => {
  return (
    <div
      className={`overflow-hidden transition-[height] ease-in-out duration-400 ${
        isOpen ? "h-28" : "h-0"
      } flex flex-col font-sans text-adirolf-blue text-2xl content-center text-center font-normal space-y-1`}
    >
      <Link to="/events">Events</Link>
      <Link to="">Donate</Link>
      <Link to="">Social Media</Link>
    </div>
  )
}

export default NavLinks
