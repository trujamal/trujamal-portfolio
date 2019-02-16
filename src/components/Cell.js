import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`

`

const CellImage = styled.img`
    width: 100%;
    height: auto;
    padding-bottom: 24px;
    display: block;
    content: url(${props => props.image});
`

const CellTitle = styled.div`
	color: black;
	font-size: 24px;
	// border-bottom: 1px solid rgba(0,0,0,0.1);
	// <CellTitle>{props.title}</CellTitle>
	padding: 30px 0;
`

const Cell = props => (
	<CellGroup> 
		<CellImage image={props.image}></CellImage>  
	</CellGroup>
)


export default Cell