import { useState } from "react"
import { Review } from "./Review"

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

export const Form = () => {
	const [reviews, setReviews] = useState(initialReviews)
	const [inputValue, setInputValue] = useState("")
	const [textareaValue, setTextareaValue] = useState("")
	const reviewsElement = reviews.map(r => (
		<Review key={r.id} author={r.author} text={r.text} />
	))

	const handleSubmit = event => {
		event.preventDefault()

		const author = inputValue
		const text = textareaValue

		setReviews(prevReviews => {
			return [{ author, text, id: prevReviews.length + 1 }, ...prevReviews]
		})

		setInputValue("")
		setTextareaValue("")
	}

	const handleInputValueChange = event => {
		setInputValue(event.target.value)
	}
	const handleTextareaValueChange = event => {
		setTextareaValue(event.target.value)
	}

	return (
		<>
			<hr />
			{reviewsElement}
			<h2>Dodaj recenzję</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<label htmlFor='author'>Autor</label>
					</div>
					<input
						type='text'
						name='author'
						id='author'
						value={inputValue}
						onChange={handleInputValueChange}
					/>
				</div>
				<div>
					<div>
						<label htmlFor='text'>Tekst</label>
					</div>
					<textarea
						name='text'
						id='text'
						value={textareaValue}
						onChange={handleTextareaValueChange}></textarea>
				</div>
				<button
					type='submit'
					disabled={inputValue === "" || textareaValue === ""}>
					Dodaj
				</button>
			</form>
		</>
	)
}
