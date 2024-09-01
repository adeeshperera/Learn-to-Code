import React, { Component } from "react";

class ClassClick extends Component {
	clickHandler() {
		console.log("Clicked the button");
	}

	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>Click Me</button>
				{/*Event Handling */}
			</div>
		);
	}
}

export default ClassClick;
