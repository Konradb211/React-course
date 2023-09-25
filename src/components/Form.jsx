import { useState } from "react"

export const Form = ({ onReviewSubmit }) => {
	const [inputValue, setInputValue] = useState("")
	const [textareaValue, setTextareaValue] = useState("")

	const handleSubmit = event => {
		event.preventDefault()

		const author = inputValue
		const text = textareaValue

		onReviewSubmit(author, text)
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
