import { useState } from "react"

export const LikeCounter = () => {
	const [numberOfLikes, setNumberOfLikes] = useState(734)

	const handleLikeButtonClick = () => {
		setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 1)
	}

	const handleLoveButtonClick = () => {
		setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes + 3)
	}

	return (
		<>
			<h2>Liczba polubień: {numberOfLikes}</h2>
			<button onClick={handleLikeButtonClick}>Lubie to!</button>
			<button onClick={handleLoveButtonClick}>Kocham to!</button>
		</>
	)
}
