import React from "react";

function MemoComp({ name }) {
	console.log("Rendering MemoComponent");
	return <div>{name}</div>;
	// Avoid re-rendering functional components
}

export default React.memo(MemoComp);
