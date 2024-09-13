import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
	class WithCounter extends React.Component {
		// If both component and functional want the same name - withCounter
		// The OriginalComponent is usually referred to as WrappedComponent. That is the component wrapped with HOC
		// incrementNumber - Passing the parameter to the HOC function
		constructor(props) {
			super(props);

			this.state = {
				count: 0,
			};
		}

		incrementCount = () => {
			this.setState((prevState) => {
				return { count: prevState.count + incrementNumber };
				// The incrementNumber parameter
			});
		};
		render() {
			console.log("HOC", this.props.name);
			return (
				<WrappedComponent
					count={this.state.count}
					incrementCount={this.incrementCount}
					{...this.props.name}
					// Passing props to wrapped components
				/>
			);
		}
	}
	return WithCounter;
};

export default withCounter;
