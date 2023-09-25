import { LikeCounter } from "./components/LikesCounter"
import { Plot } from "./components/Plot"
import "./App.css"
import { Form } from "./components/Form"
import { Reviews } from "./components/Reviews"
import { useState } from "react"

const initialReviews = [
	{
		author: "Konrad",
		text: "Jeśli nie będę pracował jako Frontaś to sie powiesze xpp!",
		id: 1,
	},
	{
		author: "Gocziczi",
		text: "Kapibara bez kapi to bara a bez bara to sok!",
		id: 2,
	},
]

function App() {
	const [reviews, setReviews] = useState(initialReviews)
	const [counterShown, setCounterShwon] = useState(true)
	const [numberOfLikes, setNumberOfLikes] = useState(734)

	const handleLikeButtonClick = () => {
		setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 1)
	}

	const handleLoveButtonClick = () => {
		setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 3)
	}
	return (
		<>
			<h1>Spiderman Across the spiderverse</h1>
			<h2>Rok produkcji: 2023</h2>
			<button
				onClick={() => {
					setCounterShwon(prevCounterShown => !prevCounterShown)
				}}>
				{counterShown ? "Schowaj Counter" : "Pokaż Counter"}
			</button>
			{counterShown && (
				<LikeCounter
					numberOfLikes={numberOfLikes}
					onLikeButtonClick={handleLikeButtonClick}
					onLoveButtonClick={handleLoveButtonClick}
				/>
			)}
			<LikeCounter />
			<Plot />
			<Reviews reviews={reviews} />
			<Form
				onReviewSubmit={(author, text) => {
					setReviews(prevReviews => {
						return [
							{ author, text, id: prevReviews.length + 1 },
							...prevReviews,
						]
					})
				}}
			/>
		</>
	)
}

export default App
