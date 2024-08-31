import React from "react";

const Greet = (props) => {
	// props.name = 'Test' - Props are immutable (The value cannot be changed) */
	return (
		<div>
			{/* Only one element can be returned - div */}
			<h1>
				Hello {props.name} a.k.a {props.heroName} {/* Props */}
			</h1>
			{props.children} {/* Children Props */}
		</div>
	);
};

// Destructuring props - Extracting values ​​from props

// const Greet = ({ name, heroName, children }) => {
// 	return (
// 		<div>
// 			{/* Only one element can be returned - div */}
// 			<h1>
// 				Hello {name} a.k.a {heroName} {/* Props */}
// 			</h1>
// 			{children} {/* Children Props */}
// 		</div>
// 	);
// };

// const Greet = (props) => {
// 	const { name, heroName, children } = props;
// 	return (
// 		<div>
// 			{/* Only one element can be returned - div */}
// 			<h1>
// 				Hello {name} a.k.a {heroName} {/* Props */}
// 			</h1>
// 			{children} {/* Children Props */}
// 		</div>
// 	);
// };

export default Greet;
