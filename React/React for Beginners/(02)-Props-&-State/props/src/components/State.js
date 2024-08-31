import React, { Component } from "react";

class Message extends Component {
	constructor() {
		super();

		this.state = {
			message: "Welcome",
		}; // State Object
	}

	changeMessage() {
		this.setState({
			message: "Thank you!",
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				{/* Event handling */}
				<button onClick={() => this.changeMessage()}>Button</button>
			</div>
		);
	}
}

export default Message;
