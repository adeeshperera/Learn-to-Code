import React, { Component } from "react";
import { UserConsumer } from "./Context";

export class ComponentF extends Component {
	render() {
		return (
			// Step 3 - Consume the context value
			<UserConsumer>
				{(username) => {
					return <div>Hello {username}</div>;
				}}
			</UserConsumer>
		);
	}
}

export default ComponentF;
