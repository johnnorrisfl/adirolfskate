import React from "react"

const Link = ({ href, children }) => (
  <a className="text-blue-800" href={href}>
    {children}
  </a>
)

export default Link
