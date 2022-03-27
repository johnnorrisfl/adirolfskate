import React from "react"

const regex = /[/]+/g

const Img = ({ src, alt, ...props }) => {
  const qualifiedSrc = process.env.IMG_PATH
    ? `${process.env.IMG_PATH}${src}`
    : src
  const cleaned = qualifiedSrc.replace(regex, "/")
  return <img className={props?.["class"]} src={cleaned} alt={alt} />
}

export default Img
