import React from 'react'
import styled from 'styled-components'
import brandsdata from '../../json_data/brandsdata.json'

const ContainerView = styled.div`
	background-color: #FAFAFA;
	height: auto;
	padding: 120px 80px 160px;
    overflow: hidden;
    animation: FadeInUp 1s 0.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    background: #fafafa;
	@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');	
    font-family: 'Lato', sans-serif;

	h1, h2, h3, h4 {
    	margin: 0;
	}

	h3 {
	    font-size: 36px;
	    line-height: 40px;
	    margin-bottom: 16px;
	}

	p {
		width: 100%;
    	font-size: 16px;
    	color: #757B80;
		margin: 0;
		display: block;
	    margin-block-start: 1em;
	    margin-block-end: 1em;
	    margin-inline-start: 0px;
	    margin-inline-end: 0px;
	}

	a {
		transition: all 0.8s ease;
		color: #1A1B1C;
    	position: relative;
    	text-decoration: none;
    	cursor: pointer;
    	font-weight: 400;
	}
`
const ContainerGroup = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: block;
`

const HeaderGroup = styled.div`
    margin-bottom: 80px;
    max-width: 480px;
`


const BrandCardsGroup = styled.div`
    margin-bottom: 24px;
`

const BrandCard = styled.img`
	-webkit-box-shadow: 0px 8px 16px -16px rgba(26,27,28, .2);
	-moz-box-shadow: 0px 8px 16px -16px rgba(26,27,28, .2);
	box-shadow: 0 8px 16px -16px rgba(26,27,28, .2);
	width: calc(25% - 12px);
    margin: 0 24px 24px 0;
    height: auto;
    content: url(${props => props.image});
`


const BrandsComponent = () => (
		<ContainerView>
			<ContainerGroup>
				<HeaderGroup>
					<h3>Brand Experience</h3>
					<p>I've been helping teams across the globe professionally for over a 5 years – creating brands, establishing design systems, building user interfaces, developing iOS experiences and much more.</p>
				</HeaderGroup>
				<BrandCardsGroup>
					{brandsdata.cells.map(cell => (
					            <BrandCard 
					              image={cell.image}/>
					          ))}
				</BrandCardsGroup>
				<p>Want to see more work? Head over to <a href="//github.com/trujamal">Github.</a></p>
			</ContainerGroup>
		</ContainerView>
	)

export default BrandsComponent