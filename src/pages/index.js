import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from '../components/wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import HomepageBanner from '../components/HomepageBanner'
import OnboardingComp from '../components/Onboarding'

const SectionCaption = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');  
  font-family: Lato;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color:#FF6541;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 1200px;
  column-count: 3;
  column-gap: 20px;
  padding: 20px;
  margin: 0 auto 5vh;

  @media (max-width: 800px) {
    column-count: 2;
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomepageBanner />
    <OnboardingComp />
    <SectionCaption>A couple of my works.</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
            <Cell 
              // title={cell.title}
              image={cell.image}/>
          ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage