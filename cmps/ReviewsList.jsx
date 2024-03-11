import { ReviewPreview } from '../cmps/ReviewPreview.jsx'

export function ReviewsList({ book }) {
  return (
    <aside className="reviews-list">
      <h3 className="reviews-title">Reviews</h3>
      {
        <ul className="clean-list">
          {book.reviews.map((review, idx) => (
            <li key={`${book.id}${idx}`}>
              <ReviewPreview review={review} />
            </li>
          ))}
        </ul>
      }
    </aside>
  )
}
