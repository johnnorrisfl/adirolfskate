import React from "react"
import Helmet from "react-helmet"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center bg-gradient-to-t from-slate-500 to-white pb-4 pt-4">
      <div className="max-w-sm min-w-[325px] m-4 sm:m-0 bg-slate-50 shadow-md shadow-slate-800">
        <header className="bg-orange-400 h-2 w-full "></header>
        <div className="px-4">
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
          <main>{children}</main>
        </div>
        <footer className="bg-orange-400 h-2 w-full mt-6"></footer>
      </div>
    </div>
  )
}

export default Layout
