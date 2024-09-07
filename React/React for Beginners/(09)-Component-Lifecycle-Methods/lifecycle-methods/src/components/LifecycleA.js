import React, { Component } from "react";
import LifecycleB from "./LifecycleChild";

// Check the rendering order of mounting - constructor => getDerivedStateFromProps => render => componentDidMount
// Check the rendering order of Updating - constructor => getDerivedStateFromProps => shouldComponentUpdate => render => getSnapshotBeforeUpdate => componentDidUpdate
// Unmounting - componentWillUnmount()
// Error Handling - static getDerivedStateFromError(error) , componentDidCatch(error, info)

class LifecycleA extends Component {
	// Mounting
	constructor(props) {
		super(props);
		this.state = {
			name: "Test",
		};
		console.log("LifecycleA constructor");
	}

	// Mounting
	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleA getDerivedStateFromProps");
		return null;
	}

	// Mounting
	componentDidMount() {
		console.log("LifecycleA componentDidMount");
	}

	// Updating
	shouldComponentUpdate() {
		console.log("LifecycleA shouldComponentUpdate");
		return true;
	}

	// Updating
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("LifecycleA getSnapshotBeforeUpdate");
		return null;
	}

	// Updating
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("LifecycleA componentDidUpdate");
	}

	changeState = () => {
		this.setState({
			name: "Updated Text",
		});
	};

	render() {
		console.log("LifecycleA render");
		return (
			<div>
				<button onClick={this.changeState}>Change state</button>
				{/* Updating */}
				LifecycleA
				<LifecycleB />
				{/* Mounting */}
			</div>
		);
	}
}

export default LifecycleA;
