import Counter from "./components/WithoutHOCClickCounter";
import Hover from "./components/WithoutHOCHoverCounter";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import "./App.css";
import HoverCounterTwo from "./components/HOCTwo/HoverCounterTwo";
import ClickCounterTwo from "./components/HOCTwo/ClickCounterTwo";

function App() {
	return (
		<div>
			<Counter />
			<Hover />
			{/* Without HOC */}

			<ClickCounter />
			<HoverCounter />
			{/* HOC */}

			<ClickCounterTwo />
			<HoverCounterTwo />
			{/* Use same name for component and function in HOC, Passing the parameter, Passing props */}
		</div>
	);
}

export default App;
