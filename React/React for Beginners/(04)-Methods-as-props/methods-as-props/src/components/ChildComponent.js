import React from "react";

const ChildComponent = (props) => {
	return (
		<div>
			<button onClick={() => props.greetHandler("child")}>Greet Parent</button>
			{/* Calling the "greetHandler" method as a prop */}
			{/* "child" is a parameter */}
		</div>
	);
};

export default ChildComponent;
