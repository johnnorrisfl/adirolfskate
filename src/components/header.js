import React, { useState } from "react"
import Img from "./img"
import NavButton from "./nav-button"
import NavLinks from "./nav-links"

const Header = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="flex justify-between">
        <Img
          alt="Adirolf Skateboarding"
          className="w-56 fill-blue-900"
          src="/Adirolf Logo Component.svg"
        ></Img>
        <NavButton
          isOpen={isOpen}
          onClick={() => {
            console.log("Executing click")
            setIsOpen(!isOpen)
          }}
        />
      </div>
      <NavLinks isOpen={isOpen}></NavLinks>
    </header>
  )
}

export default Header
