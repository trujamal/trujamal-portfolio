import React from 'react'
import styled from 'styled-components'

const Paralax = styled.div`
  content: url(${props => props.image});

  /* Set a specific height */
  height: 110vh; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ParallaxComponent = props => (
	<parallax image={props.image}/>
)


export default ParallaxComponent