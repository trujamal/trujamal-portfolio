import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasScrolled: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll',this.handleScroll)
	}

	handleScroll = (event) => {
		const scrollTop = window.pageYOffset

		if(scrollTop > 50) {
			this.setState({hasScrolled: true})
		}else{
			this.setState({hasScrolled: false})
		}
	}
	render() {
		return(
		 	<div className={this.state.hasScrolled ? 'Header HeaderScrollled' : 'Header'}>
		 		<div className="HeaderGroup">
		 			<Link to="/">Trujamal</Link>
		 			<Link to="/Work">Work</Link>
		 			<Link to="/About">About</Link>
		 			<Link to="/Contact">Contact</Link>
		 			<Link to="/Portfolio">Porfolio</Link>
		 		</div>
		 	</div>
 		)
	}
}

export default Header
