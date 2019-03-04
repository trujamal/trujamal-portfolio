import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageBanner from '../components/HomepageBanner'
import Cell from '../components/Cell'
import photosdata from '../../json_data/photosdata.json'

const ContainerGroup = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  margin: 0 auto 5vh;
`

const SectionCellGroup = styled.div`
  clear: left;
  padding-top: 15vh;
  column-count: 3;
  column-gap: 20px;
  padding: 20px 0px;
  @media (max-width: 800px) {
    column-count: 2;
  }
`
const SectionNavGroup = styled.nav`
  padding-bottom: 40px;
  float: left;
  width: 208px;
  display: block;  
`
const NavSectionTags = styled.a`
  position: relative;
  color: #1A1B1C;
  margin-right: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`


const PhotosPage = () => (
	<Layout>
    <SEO title="Photography" keywords={[`gatsby`, `application`, `react`]} />
     <HomepageBanner 
      title="Photography" 
      text="I work on extending my skillset, by containing a natural eye for the enviornment and people as a whole. Here is a look into some of the works that I've shot and edited." 
    />
    <ContainerGroup>
      <SectionNavGroup>
        <NavSectionTags>Portraits</NavSectionTags>
        <NavSectionTags>Travel</NavSectionTags>
        <NavSectionTags>Urban</NavSectionTags>
      </SectionNavGroup>
      <SectionCellGroup>
      {photosdata.cells.map(cell => (
              <Cell 
                image={cell.image}/>
            ))}
      </SectionCellGroup>
    </ContainerGroup>

	</Layout>
)

export default PhotosPage