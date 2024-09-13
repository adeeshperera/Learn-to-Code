import Hero from "./components/WithoutErrorBoundary";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Hero heroName="Batman" />
			{/* <Hero heroName="Joker" /> */}

			<ErrorBoundary>
				<Hero heroName="Superman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Joker" />
			</ErrorBoundary>
		</div>
	);
}

export default App;
