import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutInfoComponent from '../components/AboutInfoComponent'
import AboutOther from '../components/AboutOther'

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <AboutInfoComponent />
    <AboutOther />  
  </Layout>
)

export default AboutPage