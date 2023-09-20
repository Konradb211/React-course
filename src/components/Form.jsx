import { useState } from "react"

export const Form = () => {
	const [review, setReview] = useState(null)
	const [inputValue, setInputValue] = useState("")
	const [textareaValue, setTextareaValue] = useState("")

	const handleSubmit = event => {
		event.preventDefault()

		const author = inputValue
		const text = textareaValue

		setReview({ author, text })
	}

	const handleInputValueChange = event => {
		setInputValue(event.target.value)
	}
	const handleTextareaValueChange = event => {
		setTextareaValue(event.target.value)
	}

	return (
		<>
			{review && (
				<article>
					<strong>{review.author}</strong>
					<p>{review.text}</p>
				</article>
			)}
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
