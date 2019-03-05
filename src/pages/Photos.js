import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepageBanner from '../components/HomepageBanner'
import Cell from '../components/Cell'
import Portraits from '../../json_data/portraitsdata.json'
import Travel from '../../json_data/traveldata.json'
import Urban from '../../json_data/photosdata.json'
import ReactDOM from 'react-dom'

const ContainerGroup = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  margin: 0 auto 5vh;
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
const BruhThisExist = styled.div`
  clear: left;
  padding-top: 15vh;
  column-count: 3;
  column-gap: 20px;
  padding: 20px 0px;

@media (max-width: 800px) {
  column-count: 2;
}
`

var propsPassport = '';

function choose(choice){
  propsPassport = choice;

  if(propsPassport === 'Portraits') {
    const element = (
      <div>
        {Portraits.cells.map(cell => (
      <Cell 
        image={cell.image}/>
        ))}  
      </div>
    )
    ReactDOM.render(element, document.getElementById('implement_photoContainer'));
  }

  if(propsPassport === 'Travel') {
    const element = (
      <div>
        {Travel.cells.map(cell => (
      <Cell 
        image={cell.image}/>
        ))}  
      </div>
    )
    ReactDOM.render(element, document.getElementById('implement_photoContainer'));
    }

  if(propsPassport === 'Urban') {
    const element = (
      <div>
        {Urban.cells.map(cell => (
      <Cell 
        image={cell.image}/>
        ))}  
      </div>
    )
    ReactDOM.render(element, document.getElementById('implement_photoContainer'));
  }
}


const PhotosPage = () => (
	<Layout>
    <SEO title="Photography" keywords={[`gatsby`, `application`, `react`]} />
     <HomepageBanner 
      title="Photography" 
      text="I work on extending my skillset, by containing a natural eye for the enviornment and people as a whole. Here is a look into some of the works that I've shot and edited." 
    />
    <ContainerGroup>
      <SectionNavGroup>
        <NavSectionTags onClick={function(e) {
          choose('Portraits')
        }}>Portraits</NavSectionTags>
        <NavSectionTags onClick={function(e) {
          choose('Travel')
        }}>Travel</NavSectionTags>
        <NavSectionTags onClick={function(e) {
          choose('Urban')
        }}>Urban</NavSectionTags>
      </SectionNavGroup>
      <BruhThisExist id="implement_photoContainer">
      {Portraits.cells.map(cell => (
        <Cell image={cell.image}/>
        ))}  
      </BruhThisExist>
      </ContainerGroup>
	</Layout>
)

export default PhotosPage