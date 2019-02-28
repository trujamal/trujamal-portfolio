import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageBanner from '../components/HomepageBanner'
import OnboardingComp from '../components/Onboarding'
import AboutInfoComponent from '../components/AboutInfoComponent'

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <AboutInfoComponent />
  </Layout>
)

export default AboutPage

    //  <HomepageBanner 
    //   title="About" 
    //   text="Looking under the hood" 
    // />
        // <OnboardingComp />
