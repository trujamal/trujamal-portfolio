import React from 'react'
import styled from 'styled-components'

const Parallax = styled.div`
  content: url(${props => props.image});

  /* Set a specific height */
  height: 110vh; 
  margin: 0 auto;
  width: 100%;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

const ParallaxComponent = props => (
	<Parallax image={props.image}/>
)


export default ParallaxComponent