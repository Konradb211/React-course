export const LikeCounter = ({
	numberOfLikes,
	onLikeButtonClick,
	onLoveButtonClick,
}) => {
	return (
		<>
			<h2>Liczba polubień: {numberOfLikes}</h2>
			<button onClick={onLikeButtonClick}>Lubie to!</button>
			<button onClick={onLoveButtonClick}>Kocham to!</button>
		</>
	)
}
