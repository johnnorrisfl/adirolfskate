import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Socials from "../components/socials"

export default function Home() {
  return (
    <>
      <Seo title="Building skateboard community" />
      <Layout>
        <Hero></Hero>
        <Socials></Socials>
      </Layout>
    </>
  )
}
