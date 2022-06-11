import React from "react"
// import Seo
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Scores() {
  return (
    <>
      <Seo title="Scoring" />
      <Layout>
        <div className="h-screen">
          <iframe
            title="Scoring"
            src="https://www.theboardrscores.com/jumbotronpublic/TWuDhq67ats888RCe"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </Layout>
    </>
  )
}
