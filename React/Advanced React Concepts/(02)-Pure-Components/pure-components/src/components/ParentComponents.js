import React, { Component } from "react";
import RegComp from "./RegularComponents";
import PureComp from "./PureComponents";
import MemoComp from "./memo";

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Test",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: "Test",
			});
		}, 2000);
	}

	render() {
		console.log("*********Parent Comp render************");
		return (
			<div>
				<RegComp name={this.state.name} />
				<PureComp name={this.state.name} />
				<MemoComp name={this.state.name} />
			</div>
		);
	}
}

export default ParentComp;
