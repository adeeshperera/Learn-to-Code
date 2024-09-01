import FunctionClick from "./components/EventHandlingFunction";
import ClassClick from "./components/EventHandlingClass";
import EventBind from "./components/EventBind";
import "./App.css";

function App() {
	return (
		<div className="App">
			<FunctionClick /> {/* Function Component Event Handling */}
			<ClassClick /> {/* Class Component Event Handling */}
			<EventBind /> {/* Binding Event Handlers */}
		</div>
	);
}

export default App;
