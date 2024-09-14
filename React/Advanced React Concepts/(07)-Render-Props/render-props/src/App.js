import Counter from "./components/RenderProps";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Counter
				render={(count, incrementCount) => (
					<ClickCounter count={count} incrementCount={incrementCount} />
				)}
			/>
			{/* The count state and incrementCount method from the Counter component are passed as props to the ClickCounter component */}

			<Counter
				render={(count, incrementCount) => (
					<HoverCounter count={count} incrementCount={incrementCount} />
				)}
			/>
			{/* The count state and increment count method from the Counter component are passed as props to the HoverCounter component */}
		</div>
	);
}

export default App;
