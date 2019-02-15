import React from 'react'
import './Card.css'
import Card from '../components/CardsComponent';
 
const CardsCompoenent = () => (
	<div className="Cards">
	      <h2>Selected Projects</h2>
	      <p>Hover over the cards to learn more about projects</p>
	      <div className="CardGroup">
	        <Card title="Portraits"
	              text="55 images"
	              image={require('../images/Portraits.jpg')}
	        />
	        <Card title="Landscape"
	              text="47 images"
	              image={require('../images/Landscape01.jpg')}
	        />
	        <Card title="UI Design"
	              text="32 images"
	              image={require('../images/Landscape02.jpg')}
	        />
	        <Card title="UX Design"
	              text="31 images"
	              image={require('../images/Landscape03.jpg')}
	        />
	      </div>
	</div>
	)

export default CardsCompoenent