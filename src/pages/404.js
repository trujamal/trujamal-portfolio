import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
    @import url('//fonts.googleapis.com/css?family=Lato:100,300,400,700');
    margin-top: -5vw;
    z-index: 1;
	height: 110vh;
	background-image: url("//cdn.dribbble.com/users/99875/screenshots/2740042/running_800x600.gif");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	@media (max-width: 1200px) {
    margin-top: -20px;
	}
`

const SubContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const Column = styled.div`
	-webkit-box-align: center;
	-ms-flex-align: center;
	padding-left: 70px;
	padding-right: 70px;
	max-width: 1430px;
	align-items: center;
	display: flex;
	position: relative;
	min-height: 100vh;

	@media (max-width:1200px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
	}

	@media (max-width:768px) {
	 -ms-flex: 0 0 100%;
	flex: 0 0 100%;
	max-width: 100%;
	}


`

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 100px;
  padding-bottom: 100px;
  display: block;
`

const HeaderCont = styled.h1`
	font-size: 100px;font-family: Lato, sans-serif;font-weight: bold;color: #E6EDF1;
`
const MaxText = styled.p`
	font-size: 52px;font-family: Lato, sans-serif;font-weight: 200;color: #E6EDF1;
`

const SubText = styled.p`
	max-width: 28.125em;font-size: 18px;margin-bottom: 22.5px;padding: 0;font-family: Lato, sans-serif;font-style: inherit;vertical-align: baseline;border: 0;margin: 0 0 6px;color: #E6EDF1;letter-spacing: .025em;line-height: 1.55556;font-weight: 500;
`

const StyledLink = styled(Link)`
	color: #000;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
`


const NotFoundPage = () => (
  <Layout>
    <SEO title="How did you get here?" />
    <div>
		<Container>
		    <SubContainer>
		        <Row>
		            <Column>
		                <TextContainer>
		                    <HeaderCont>404</HeaderCont>
		                    <MaxText>No es bueno<br /></MaxText>
		                    <SubText>You came here, looking for something, and all you get is this silly gif. Not good. Not good, at all.<br /></SubText>
		                    <StyledLink to="/">Back to square one</StyledLink>
						</TextContainer>
		            </Column>
		        </Row>
		    </SubContainer>
		</Container>
    </div>
  </Layout>
)

export default NotFoundPage

