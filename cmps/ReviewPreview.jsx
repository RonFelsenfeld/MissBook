export function ReviewPreview({ review }) {
  const { fullName, rating, readAt } = review

  return (
    <article className="review">
      <span className="name">{fullName}</span>,
      <span className="rating">{'⭐️'.repeat(rating)}</span>,
      <span className="readAt">{readAt}</span>
    </article>
  )
}
