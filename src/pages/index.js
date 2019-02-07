import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Trujamal" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Onboarding">
      <div className="OnboardingGroup">
        <h1>creative</h1>
        <h2>Shooting eye-catching moments for fun</h2>
        <p>Every image is a story in frame. Discover my most popular images and uncover the stories behind them.</p>
        <Link to="/page-2/">Discover my work</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
