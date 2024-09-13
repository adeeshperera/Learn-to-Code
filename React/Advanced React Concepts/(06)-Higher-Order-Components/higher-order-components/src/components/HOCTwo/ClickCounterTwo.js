import React, { Component } from "react";
import withCounter from "./HOCTwo";

class ClickCounterTwo extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<button onClick={incrementCount}>
				{this.props.name} Clicked {count} times
			</button>
		);
	}
}

export default withCounter(ClickCounterTwo, 5);
// withCounter functionality export the ClickCounter component
