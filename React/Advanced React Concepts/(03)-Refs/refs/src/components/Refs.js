import React, { Component } from "react";

export class RefsDemo extends Component {
	constructor(props) {
		super(props);
		// 1st way - 1
		this.inputRef = React.createRef();

		// 2nd way
		// this.cbRef = null;
		// this.setCbRef = (element) => {
		// 	this.cbRef = element;
		// };
	}

	componentDidMount() {
		// 1st way - 3
		this.inputRef.current.focus();

		console.log(this.cbRef);

		// 2nd way
		//if (this.cbRef) {
		//	this.cbRef.focus();
		//}
	}

	// Fetching the value as an alert
	clickHandler = () => {
		alert(this.inputRef.current.value);
	};

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				{/* 1st way - 2 */}
				<input type="text" ref={this.setCbRef} />
				{/* 2nd way */}
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default RefsDemo;
