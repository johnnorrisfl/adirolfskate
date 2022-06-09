import React from "react"
import Events from "../components/events"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import Socials from "../components/socials"

export default function Home() {
  return (
    <>
      <Seo title="Building skateboard community" />
      <Layout>
        <div class="flex flex-col space-y-6">
          <Banner></Banner>
          <Events></Events>
          <Socials></Socials>
        </div>
      </Layout>
    </>
  )
}
