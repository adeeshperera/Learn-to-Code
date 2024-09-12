import React, { Component } from "react";

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	// Method 1 - Render other parts of the UI after an error is thrown
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	// Method 2 - Used to log the error and related information
	componentDidCatch(error, info) {
		console.log(error);
		console.log(info);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
