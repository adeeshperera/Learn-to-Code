import Stylesheet from "./components/Stylesheet"; //CSS Stylesheets
import Inline from "./components/Inline";
import "./appStyles.css"; //CSS Stylesheets
import styles from "./appStyles.module.css"; //Importing a module stylesheet - 'styles' is a variable name, so can't be used in child components
import "./App.css";

function App() {
	return (
		<div className="App">
			<Stylesheet />
			{/* CSS Stylesheets */}
			<Stylesheet primary={true} />
			{/* Conditionally apply a class based on props or state */}

			<Inline />

			<h1 className="error">Error</h1>
			{/* CSS Stylesheets */}
			<h1 className={styles.success}>Success</h1>
			{/* CSS Modules */}
		</div>
	);
}

export default App;
