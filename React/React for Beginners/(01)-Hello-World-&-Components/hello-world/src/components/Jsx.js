import React from "react";

//JSX

const Hello = () => {
	//return (
	//	<div className="dummyClass">
	//		<h1>JSX</h1>
	//	</div>
	//);

	//JS - React.createElement('HTML tag', 'Optional properties', 'children')

	return React.createElement(
		"div",
		{ id: "hello", className: "dummyClass" }, //An id and a class are given to the div
		React.createElement("h1", null, "JS") //<h1></h1>
	);
};

export default Hello;
