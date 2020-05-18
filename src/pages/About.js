import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutInfoComponent from '../components/AboutInfoComponent'
import AboutOther from '../components/AboutOther'
import HomepageBanner from '../components/HomepageBanner'
import ParallaxComponent from '../components/ParallaxComponent'
import Me from "../images/aboutpage.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <HomepageBanner 
      title="Welcome in, my name is Jamal and this is my story." 
      text="I'm the co-founder of the startup Veve, specialising in development for web, mobile and design products." 
    />
    <ParallaxComponent image={Me}/>
    <AboutInfoComponent />
    <AboutOther /> 

  </Layout>
)

export default AboutPage