import React from "react"
import Helmet from "react-helmet"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center ">
      <div className="max-w-md min-w-[325px] p-2">
        <Helmet>
          <meta
            name="keywords"
            content={`${[
              "Florida skateboarding",
              "skateboarding",
              "skateboarding community",
              "skateboarding lessons",
            ].join(", ")}`}
          />
        </Helmet>
        <Header></Header>
        {children}
      </div>
    </div>
  )
}

export default Layout
