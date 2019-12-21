import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Chapters from "../components/chapters"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <h2>Full site coming soon</h2>
    <Chapters />
  </Layout>
)

export default IndexPage
