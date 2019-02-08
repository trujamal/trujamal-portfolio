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
        <h2>Shooting eye-catching<br />moments for fun</h2>
        <p>Every image is a story in frame. Discover my most popular images and uncover the stories behind them.</p>
        <Link to="/page-2/">Discover my work</Link>
        <svg width="2560" height="172" viewBox="0 0 2560 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" fill="white">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="" />
          </path> 
        </svg>
      </div>
    </div>
  </Layout>
)

export default IndexPage
