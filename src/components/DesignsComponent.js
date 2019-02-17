import React from 'react'
import styled from 'styled-components'
import designdata from '../../json_data/designdata.json'

const DesignContainer = styled.div`
	max-width: 1200px;
    padding: 0 80px;
    animation: FadeInUp 1s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
    display: block;
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');	
	font-family: 'Lato', sans-serif;
	margin: 0 auto;

`

const DesignContainerGroup = styled.div`
    column-count: 2;
    column-gap: 3%;
 	padding: 20px;

`

const DesignCard = styled.div`
    margin-bottom: 160px;
    position: relative;
    float: left;

`

const DesignCardImage = styled.span`
    width: 580px;
    height: 435px;
    object-fit: cover;
    display: block;
    border: 1px solid #fff;
    content: url(${props => props.image});

`


const DesignCardInfo = styled.div`
    padding: 24px 0 0;


	p {
    color: #757B80;
    max-width: 480px;
    margin-top: 16px;
    padding-right: 40px;
    margin: 0;
	}

	h1,h2,h3,h4 {
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;

	}

`


const DesignsComponent = () => (
	<DesignContainer>
		<DesignContainerGroup> 
			{designdata.cells.map(cell => (
				<DesignCard>
					<DesignCardImage 
						image={cell.image}
					/>
					<DesignCardInfo 
						title={cell.title}
						sub_text={cell.sub_text}
					>
						<h1>{cell.title}</h1>
						<p>{cell.sub_text}</p>
					</DesignCardInfo>
				</DesignCard>
				))} 
		</DesignContainerGroup>
	</DesignContainer>
)

export default DesignsComponent

