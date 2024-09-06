import React from "react";
import "./Stylesheet.css";

function Stylesheet(props) {
	let className = props.primary ? "primary" : "";
	return (
		<div>
			<h1 className="primary">Stylesheet</h1>
			{/* CSS Stylesheets */}

			<h1 className={className}>Stylesheet</h1>
			{/* Conditionally apply*/}

			<h1 className={`${className} font-xl`}>Stylesheet</h1>
			{/* Multiple Classes*/}
		</div>
	);
}

export default Stylesheet;
