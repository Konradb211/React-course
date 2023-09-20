import { useState } from "react"

export const Plot = () => {
	const [isSpoilerShown, setIsSopilerShown] = useState(false)
	const [isWarnignShown, setIsWarningShown] = useState(true)

	const handleShowSpoilerClick = () => {
		setIsSopilerShown(true)
		setIsWarningShown(false)
	}

	const handleCloseWarningClick = () => {
		setIsWarningShown(false)
	}
	return (
		<>
			<h2>Fabuła</h2>
			{isWarnignShown && (
				<p>
					Uwaga! opis fabuły zawiera spoilery!{" "}
					<button onClick={handleCloseWarningClick}>X</button>
				</p>
			)}
			<p>
				Jest to kontynuacja pierwszej częsci. Dobrzy walczą ze złymi i źli z
				dobrymi. Miles the black one
			</p>
			{isSpoilerShown ? (
				<p>Miles z ziemi 42 jest prowlerem.</p>
			) : (
				<button onClick={handleShowSpoilerClick}>Pokaż spoiler</button>
			)}
		</>
	)
}
