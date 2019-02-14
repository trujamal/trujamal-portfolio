import React from "react"
import { Link } from "gatsby"
import Card from '../components/Card';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from '../components/Section'
import Wave from '../components/wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import HomepageBanner from '../components/HomepageBanner'
import OnboardingComp from '../components/Onboarding'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color:#FF6541;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomepageBanner />
    <div className="Cards">
      <h2>Selected Projects</h2>
      <p>Hover over the cards to learn more about projects</p>
      <div className="CardGroup">
        <Card title="Portraits"
              text="55 images"
              image={require('../images/Portraits.jpg')}
        />
        <Card title="Landscape"
              text="47 images"
              image={require('../images/Landscape01.jpg')}
        />
        <Card title="UI Design"
              text="32 images"
              image={require('../images/Landscape02.jpg')}
        />
        <Card title="UX Design"
              text="31 images"
              image={require('../images/Landscape03.jpg')}
        />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper01.jpg')}
      title="About"
      text="Jamal Rasool is a multidisciplinary designer and full stack developer, that’s currently working on
      crafting responsive web user interfaces, and mobile applications with proper user experience. I enjoy working with people of all different backgrounds, bringing to life other
      people’s ideas and visions with creative experience, then crafting a product they want and to see come alive in the digital space. As a critical thinker and a problem solver, I love any challenge
      that I’m presented with and will go above and beyond whenever the opportunity arises."
    />
    <SectionCaption>A couple of my works.</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
            <Cell 
              title={cell.title}
              image={cell.image}/>
          ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage