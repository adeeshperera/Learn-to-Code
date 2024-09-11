import RefsDemo from "./components/Refs";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/ForwardingRefsParent";
import "./App.css";

function App() {
	return (
		<div className="App">
			<RefsDemo />

			<FocusInput />
			{/* A ref to a child component from a parent component */}

			<FRParentInput />
			{/* Forwarding Refs */}
		</div>
	);
}

export default App;
