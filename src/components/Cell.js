import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`

`

const CellImage = styled.span`
    width: 100%;
    height: auto;
    padding-bottom: 24px;
    display: block;
    content: url(${props => props.image});
`

const Cell = props => (
	<CellGroup> 
		<CellImage image={props.image}></CellImage>  
	</CellGroup>
)


export default Cell