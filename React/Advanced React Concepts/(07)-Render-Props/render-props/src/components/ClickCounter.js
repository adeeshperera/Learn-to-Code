import React, { Component } from "react";

class ClickCounter extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<button onClick={incrementCount}>Clicked {count} times</button>
			// Using what is passed in props to render the actual UI
		);
	}
}

export default ClickCounter;
