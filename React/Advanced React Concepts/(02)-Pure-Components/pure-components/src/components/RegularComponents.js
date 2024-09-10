import React, { Component } from "react";

class RegComp extends Component {
	render() {
		console.log("Regular Comp render");
		return <div>Regular Component {this.props.name}</div>;
		// Regular components can be re-rendered even if there are no difference
	}
}

export default RegComp;
