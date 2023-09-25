import { Review } from "./Review"

export const Reviews = ({ reviews }) => {
	const reviewsElement = reviews.map(r => (
		<Review key={r.id} author={r.author} text={r.text} />
	))

	return <>{reviewsElement}</>
}
