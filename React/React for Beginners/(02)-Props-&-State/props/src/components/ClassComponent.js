import React, { Component } from "react";

class Welcome extends Component {
	render() {
		const { name, heroName } = this.props; // Destructuring props - Extracting values ​​from props

		// const { state1, state2 } = this.state; //Destructuring state

		return (
			<h1>
				Welcome {name} a.k.a {heroName} {/* Props */}
				{/* Welcome {this.props.name} a.k.a {this.props.heroName} */}
			</h1>
		);
	}
}

export default Welcome;
