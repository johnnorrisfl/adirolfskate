import React from "react"

const NavLinks = ({ isOpen, onClickLink }) => {
  return (
    <div
      className={`overflow-hidden transition-[height] ease-in-out duration-400 ${
        isOpen ? "h-28" : "h-0"
      } 
      flex flex-col font-sans text-adirolf-blue text-2xl content-center text-center font-normal space-y-1`}
    >
      <a href="/">Home</a>
      <a href="/events">Events</a>
      <a href="/scores">Scores</a>
    </div>
  )
}

export default NavLinks
