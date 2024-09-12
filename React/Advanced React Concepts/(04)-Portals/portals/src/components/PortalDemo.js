import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.getElementById("portal-root") //Insert this component under the portal root node (id="portal-root" - /public/index.html)
	);
}

export default PortalDemo;
