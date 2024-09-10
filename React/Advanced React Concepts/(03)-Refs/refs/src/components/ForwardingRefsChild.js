import React from "react";

// function FRInput() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
// }

//Converting the FRInput function to an arrow function
const FRInput = React.forwardRef((props, ref) => {
	// This ref parameter will point to the value of the ref attribute from the parent component (ref is being forwarded from the parent to the native input element)
	return (
		<div>
			<input type="text" ref={ref} />
			{/* The input element ref attribute and assign the value of the ref parameter */}
		</div>
	);
});

export default FRInput;
