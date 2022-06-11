import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Events from "../components/events"

const EventsPage = () => {
  return (
    <>
      <Seo title="Scoring" />
      <Layout>
        <Events></Events>
      </Layout>
    </>
  )
}

export default EventsPage
