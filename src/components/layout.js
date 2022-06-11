import React from "react"
import Helmet from "react-helmet"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center bg-slate-50 ">
      <div className="max-w-md min-w-[325px] bg-white shadow-sm">
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
          <meta
            property="og:image"
            content="https://d1k5l1t2ld94t6.cloudfront.net/krys-amon-EVwuoMy19JU-unsplash+cropped+4.png"
          />
        </Helmet>
        <Header></Header>
        <div class="flex flex-col space-y-6 px-[1rem]">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
