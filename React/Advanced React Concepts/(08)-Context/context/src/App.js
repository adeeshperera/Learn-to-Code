import ComponentC from "./components/ComponentC";
import "./App.css";
import { UserProvider } from "./components/Context";

function App() {
	return (
		<div className="App">
			{/* Step 2 - Provide a context value => ComponentF.js */}
			<UserProvider value="Test">
				<ComponentC />
				{/* Child prop */}
			</UserProvider>

			<ComponentC />
			{/* Default Value */}
		</div>
	);
}

export default App;
