import React from "react";

function FunctionClick() {
	function clickHandler() {
		console.log("Button clicked");
	}

	return (
		<div>
			<button onClick={clickHandler}>Click</button>
			{/* Event Handling
			clickHandler() - Just the function is executed, but it does not happen by clicking the button
             */}
		</div>
	);
}

export default FunctionClick;
