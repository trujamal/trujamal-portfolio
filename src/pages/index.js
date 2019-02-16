import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from '../components/wave'
import styled from 'styled-components'
import HomepageBanner from '../components/HomepageBanner'
import BrandsComponent from '../components/BrandsComponent'
import DesignsComponent from '../components/DesignsComponent'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomepageBanner 
      title="Developer for mobile, web and design products." 
      text="Co-founder and pusher of pixels at, Veve since 2015" 
    />
    <DesignsComponent />
    <BrandsComponent />
  </Layout>
)

export default IndexPage