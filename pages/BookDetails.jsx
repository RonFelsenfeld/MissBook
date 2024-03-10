export function BookDetails({ book, onGoBack }) {
  const { amount, currencyCode, isOnSale } = book.listPrice

  return (
    <section className="book-details flex">
      <div>
        <h2 className="book-title">{book.title}</h2>

        <p className="book-desc">{book.description}</p>
        <p className="book-price">
          Price:{' '}
          <span>
            {amount + ' '}
            {currencyCode}
          </span>
        </p>
        {isOnSale && <p className="sale">On sale!</p>}

        <button onClick={onGoBack}>Go back</button>
      </div>

      <img src={book.thumbnail} alt="Book's Cover" />
    </section>
  )
}
