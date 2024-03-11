export function ReviewPreview({ review }) {
  const { fullName, rating, readAt } = review

  return (
    <article className="review">
      <span>{fullName}</span>,<span>{'⭐️'.repeat(rating)}</span>,
      <span>{readAt}</span>
    </article>
  )
}
