export function BookPreview({ book }) {
  const { amount, currencyCode } = book.listPrice

  return (
    <article className="book-preview flex column align-center">
      <h2 className="book-title">{book.title}</h2>
      <img src={book.thumbnail} alt="Book's Cover" />

      <p className="book-desc">{book.description}</p>
      <p className="book-price">
        Price:{' '}
        <span>
          {amount + ' '}
          {currencyCode}
        </span>
      </p>
    </article>
  )
}
