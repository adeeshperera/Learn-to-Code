import React, { Component } from "react";

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	// #if-else approach
	// render() {
	// 	if (this.state.isLoggedIn) {
	// 		return <div>Welcome Vishwas</div>; //JSX
	// 	} else {
	// 		return <div>Welcome Guest</div>; //JSX
	// 	}
	// }

	// #element-variables approach - if else statements don't work inside the JSX
	// render() {
	// 	let message;
	// 	if (this.state.isLoggedIn) {
	// 		message = <div>Welcome Vishwas</div>;
	// 	} else {
	// 		message = <div>Welcome Guest</div>;
	// 	}
	// 	return <div>{message}</div>; //JSX
	// }

	// #ternary-operator-approach
	// render() {
	// 	return this.state.isLoggedIn ? (
	// 		<div>Welcome Vishwas</div> //True
	// 	) : (
	// 		<div>Welcome Guest</div> //False
	// 	);
	// }

	// #short-circuit-operator-approach - Only the true statement is returned
	render() {
		return this.state.isLoggedIn && <div>Welcome Vishwas</div>; //True
	}
}

export default UserGreeting;
