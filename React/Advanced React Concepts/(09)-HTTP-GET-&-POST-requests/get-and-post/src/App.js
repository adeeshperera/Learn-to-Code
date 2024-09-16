import PostList from "./components/Get";
import PostForm from "./components/Post";
import "./App.css";

function App() {
	return (
		<div className="App">
			<PostList />
			{/* GET Request */}

			<PostForm />
			{/* Post Request */}
		</div>
	);
}

export default App;
