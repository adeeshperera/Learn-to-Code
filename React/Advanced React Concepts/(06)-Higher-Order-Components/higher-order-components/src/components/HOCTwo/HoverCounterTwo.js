import React, { Component } from "react";
import withCounter from "./HOCTwo";

class HoverCounterTwo extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>;
	}
}

export default withCounter(HoverCounterTwo, 10);
// withCounter functionality export the HoverCounter component
