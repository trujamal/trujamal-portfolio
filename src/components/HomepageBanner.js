import React from 'react'
import styled from 'styled-components'

const HpbGroup = styled.div`
	padding: 320px 80px 240px;
	display: block;
	color:FFFF;
	@import url('//fonts.googleapis.com/css?family=Lato:100,300,400,700');	
	font-family: 'Lato', sans-serif;
`
const HpbContainer = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    font-weight: 400;
    letter-spacing: -.2px;
`

const BannerText = styled.div`
    max-width: 600px;
    animation: FadeInUp 1s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    display: block;

	h2 {
		font-size: 48px;
	    line-height: 56px;
	    margin-bottom: 16px;
	}

	a {
		transition: all 0.8s ease;
		color: #1A1B1C;
    	position: relative;
    	text-decoration: none;
    	cursor: pointer;
    	font-weight: 400;
	}

	a:before {
		content: "";
	    position: absolute;
	    width: 0%;
	    height: 1px;
	    bottom: -2px;
	    left: 0;
	    background-color: #1A1B1C;
	    visibility: hidden;
	    -webkit-transition: all 0.2s ease-in-out 0s;
	    transition: all 0.2s ease-in-out 0s;
	}

	a:hover {
		 outline-width: 0;
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

`


const HomepageBanner = props => (
	<HpbGroup>
		<HpbContainer>
			<BannerText>
			<h2>{props.title}</h2>
			<p>{props.text}</p>
			</BannerText>
		</HpbContainer>
	</HpbGroup>
)

export default HomepageBanner

