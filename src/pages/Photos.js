import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageBanner from '../components/HomepageBanner'
import Cell from '../components/Cell'
import photosdata from '../../json_data/photosdata.json'


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


const PhotosPage = () => (
	<Layout>
    <SEO title="Photography" keywords={[`gatsby`, `application`, `react`]} />
     <HomepageBanner 
      title="Photography" 
      text="I work on extending my skillset, by containing a natural eye for the enviornment and people as a whole. Here is a look into some of the works that I've shot and edited." 
    />
    <SectionCellGroup>
    {photosdata.cells.map(cell => (
            <Cell 
              image={cell.image}/>
          ))}
    </SectionCellGroup>
	</Layout>
)

export default PhotosPage