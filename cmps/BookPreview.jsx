export function BookPreview({ book }) {
  const { amount, currencyCode } = book.listPrice

  return (
    <article className="book-preview">
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <img src={book.thumbnail} alt="Book's Cover" />
      <p>
        Price:{' '}
        <span>
          {amount + ' '}
          {currencyCode}
        </span>
      </p>
    </article>
  )
}
