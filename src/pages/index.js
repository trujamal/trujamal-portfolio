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
  font-weight: 700;
  font-size: 48px;
  color: #141414;
  padding-top: 10vh;
  text-align: center;
`

const SectionCellGroup = styled.div`
  padding-top: 15vh;
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
    <SectionCaption>Gallery</SectionCaption>
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