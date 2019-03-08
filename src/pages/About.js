import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutInfoComponent from '../components/AboutInfoComponent'
import AboutOther from '../components/AboutOther'
import HomepageBanner from '../components/HomepageBanner'

const ImageContainer = styled.div`
    overflow: hidden;
    margin-top: 53px;
    display: block;
`

const ImageGroupContainer = styled.div`
  transform: translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);
  position: relative;
  overflow: visible;
  padding: 20px 0px;
  width: 100%;
  height: 80vh;
  margin-top: 0px;
  background-image: url('//cl.ly/a45a0c24e5ed/IMG_0091.JPG');
  background-size: cover;
  background-repeat: no-repeat;

`

const ImageHandler = styled.span`
  height: 200px;
  background-color: white;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <HomepageBanner 
      title="Welcome in, my name is Jamal and this is my story." 
      text="I'm the co-founder of the startup Veve, specialising in development for web, mobile and design products." 
    />
    <ImageContainer>
      <ImageGroupContainer>
        <ImageHandler />
      </ImageGroupContainer>
    </ImageContainer>
    <AboutInfoComponent />
    <AboutOther /> 

  </Layout>
)

export default AboutPage