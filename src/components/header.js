import React from "react"
import Navigation from "./navigation"
import Img from "./img"

const Header = ({ ...props }) => {
  return (
    <div className="mb-8">
      <div className="w-full h-[200px] relative">
        <Img
          className="w-full h-full object-contain mix-blend-multiply relative"
          src="/skyline.png"
          alt="Jacksonville skyline"
        ></Img>
      </div>
      <Navigation />
    </div>
  )
}

export default Header
