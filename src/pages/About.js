import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageBanner from '../components/HomepageBanner'
import OnboardingComp from '../components/Onboarding'


const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
     <HomepageBanner 
      title="About" 
      text="Looking under the hood" 
    />
    <OnboardingComp />
  </Layout>
)

export default AboutPage
