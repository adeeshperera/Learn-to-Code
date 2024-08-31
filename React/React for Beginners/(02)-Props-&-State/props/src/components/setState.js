import React, { Component } from "react";

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	increment() {
		// this.state.count = this.state.count + 1   - The state can't be midified directly

		// this.setState(
		// 	{
		// 		count: this.state.count + 1,
		// 	},
		// 	() => {
		// 		console.log("Callback", this.state.count);
		// 		//Callback Function
		// 	}
		// );
		// console.log(this.state.count); // The code is executed before the state is updated

		// Update the state based on the previous state value
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	}

	incrementFive() {
		console.log("Inside incrementFive");
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}

	render() {
		return (
			<div>
				<div>Count - {this.state.count}</div>
				<button onClick={() => this.incrementFive()}>Increment</button>
			</div>
		);
	}
}

export default Counter;
