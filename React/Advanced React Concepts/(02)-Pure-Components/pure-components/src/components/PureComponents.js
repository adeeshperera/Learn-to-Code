import React, { PureComponent } from "react";

class PureComp extends PureComponent {
	render() {
		console.log("Pure Comp render");
		return <div>Pure Component {this.props.name}</div>;
		// If there is no difference, the component will not re rendered (this.state value & this.setState value) - Check the console
	}
}

export default PureComp;
