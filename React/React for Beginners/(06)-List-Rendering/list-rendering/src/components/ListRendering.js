import React from "react";
import Person from "./Refactor";

function NameList() {
	const names = ["Bruce", "Clark", "Diana", "Bruce"];
	// const nameList = names.map(name => <h2>{name}</h2>) - Using the map method to extract values ​​from the array and assign them to a new array(name)

	const persons = [
		{
			id: 1,
			name: "Bruce",
			age: 30,
			skill: "React",
		},
		{
			id: 2,
			name: "Clark",
			age: 25,
			skill: "Angular",
		},
		{
			id: 3,
			name: "Diana",
			age: 28,
			skill: "Vue",
		},
	];

	// Render the name, age and skill
	const newPersonList = persons.map((person) => (
		<h2>
			I am {person.name}. I am {person.age} years old. I know {person.skill}
		</h2>
	));
	// The recommended way is to refactor the JSX into a separate component - Refactor.js

	// Render the elements of the 'persons' array with a key
	const personList = persons.map((person) => (
		<Person key={person.id} person={person} /> //Passing props to the Person
	));

	// Index as the key for the list
	const nameList = names.map((name, index) => (
		<h2 key={index}>
			{index} {name}
		</h2>
	));
	return <div>{nameList}</div>;
}

export default NameList;
