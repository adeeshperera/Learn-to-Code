import React from "react";

function Person({ person, key }) {
	return (
		<div>
			<h2>
				{/* {key} -Cant be used as a prop as it is used to uniquely identify items during rendering. If we want to render the ID, use a different prop */}
				I am {person.name}. I am {person.age} years old. I know {person.skill}
			</h2>
		</div>
	);
}

export default Person;
