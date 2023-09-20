import { LikeCounter } from "./components/LikesCounter"
import { Plot } from "./components/Plot"
import "./App.css"
import { Form } from "./components/Form"

function App() {
	return (
		<>
			<h1>Spiderman Across the spiderverse</h1>
			<h2>Rok produkcji: 2023</h2>
			<LikeCounter />
			<Plot />
			<Form />
		</>
	)
}

export default App
