import React from "react"

const NavButton = ({ onClick, isOpen }) => (
  <div className="flex flex-col justify-center pr-2">
    <button className="border-2 border-adirolf-blue" onClick={onClick}>
      <img
        src={`${isOpen ? "menu close.svg" : "menu.svg"}`}
        alt="Main navigation menu"
      />
    </button>
  </div>
)

export default NavButton
