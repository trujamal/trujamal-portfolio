import React from 'react'
import projectsdata from '../../json_data/projectsdata.json'
import styled, { keyframes } from "styled-components"


const DesignContainer = styled.div`
    max-width: 1200px;
    padding: 0 80px;
    animation: FadeInUp 1s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    display: block;
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');	
	font-family: 'Lato', sans-serif;
	margin: 0 auto;
`
const designCardAnimation = keyframes`
  from {
     opacity: 1;
     overflow: hidden;
     transform: scale(1.0,1.0);
   }
   to {
     opacity: 1;
     overflow: hidden;
     transform: scale(1.05,1.05);
   }
`

const DesignContainerGroup = styled.div`
    column-count: 2;
    column-gap: 3%;
    padding: 0px 20px;

 	@media (max-width: 1024px) {
        column-count: 1;
        column-gap: 5%;
    }

`

const DesignCard = styled.a`
    margin-bottom: 100px;
    position: relative;
	transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);

    overflow: hidden;
    display: inline-block; width: 100%;

    &:hover:before {
    visibility: hidden;
    width: 100%
    }

    &:before {
    position: absolute;
    width: 0%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #1A1B1C;
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    }

    
    text-decoration: none !important;

    @media (max-width: 1024px) {
    	float: none;
    }

`

const DesignCardImage = styled.span`
    width: 580px;
    height: 435px;
    object-fit: cover;
    display: block;
    border: 1px solid #fff;
    content: url(${props => props.image});
    transition: all 0.3s ease;

    &:hover {
        overflow: hidden;
        animation: ${designCardAnimation} 1s 0.2s forwards cubic-bezier(0.2,0.8,0.2,1);
    }

 	@media (max-width: 1366px) {
		width: 100%;
		height: 74%;
    }
`


const DesignCardInfo = styled.div`


	p {
    color: #757B80;
    max-width: 480px;
    font-size: 12px;
    margin-top: 0px;
    padding-right: 40px;
    margin: 0;
	}

	h1,h2,h3,h4 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;

	}

`

const ProjectComponent = () => (
	<DesignContainer>
		<DesignContainerGroup> 
			{projectsdata.cells.map(cell => (
				<DesignCard href={cell.link}>
					<DesignCardImage 
						image={cell.image}
					/>
					<DesignCardInfo 
						project={cell.project}
						year={cell.year}
					>
						<h1>{cell.project}</h1>
						<p>{cell.year}</p>
					</DesignCardInfo>
				</DesignCard>
				))} 
		</DesignContainerGroup>
	</DesignContainer>
)

export default ProjectComponent

// project 
// year
// link
// image
