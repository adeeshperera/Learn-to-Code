import React, { Component } from "react";

// this keyword is undefined in an event handler, that is the reason event binding is necessary

class EventBind extends Component {
	constructor() {
		super();
		this.state = {
			message: "Hello",
		};
		// this.clickHandler = this.clickHandler.bind(this) // 3rd Method - Binding in class constructor
	}

	// clickHandler() {
	//   console.log(this)
	//   this.setState({message: 'Goodbye'})
	// }

	clickHandler = () => {
		this.setState({ message: "Goodbye" }); // 4th Method - Class property as arrow function
	};

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
				{/* 1st Method - Binding in render */}

				{/* <button onClick={() => this.clickHandler()}>Click</button> */}
				{/* 2nd Method - Arrow function in render */}

				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default EventBind;
