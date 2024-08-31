import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/FunctionalComponent";
import Welcome from "./components/ClassComponent";
import Hello from "./components/Jsx";

function App() {
	return (
		<div className="App">
			<p>Hello, World!</p>
			<Greet />
			<Welcome />
			<Hello />
		</div>
	);
}

export default App;
