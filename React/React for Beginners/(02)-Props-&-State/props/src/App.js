import Greet from "./components/FunctionalComponent";
import Welcome from "./components/ClassComponent";
import Message from "./components/State";
import Counter from "./components/setState";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Greet name="Bruce" heroName="Batman">
				{/* Props */}
				<p>This is children props</p> {/* Children Props */}
			</Greet>
			<Greet name="Clark" heroName="Superman">
				<button>Action</button> {/* Children Props */}
			</Greet>
			<Greet name="Diana" heroName="Wonder Woman" />
			<Welcome name="Bruce" heroName="Batman" /> {/* Props */}
			<Welcome name="Clark" heroName="Superman" />
			<Welcome name="Diana" heroName="Wonder Woman" />
			<Message /> {/* State */}
			<Counter /> {/* setState */}
		</div>
	);
}

export default App;
