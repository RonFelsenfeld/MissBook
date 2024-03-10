export function BookDetails({ book, onGoBack }) {
  const { amount, currencyCode, isOnSale } = book.listPrice

  function getReadingDesc() {
    const { pageCount } = book
    if (pageCount > 500) return '(Serious Reading)'
    else if (pageCount > 200) return '(Descent Reading)'
    else if (pageCount < 100) return '(Light Reading)'

    return ''
  }

  function getPublishDesc() {
    const { publishedDate } = book
    const yearsPassed = new Date().getFullYear() - publishedDate

    if (yearsPassed > 10) return '(Vintage)'
    else if (yearsPassed < 1) return '(New)'

    return ''
  }

  function getPriceClass() {
    if (amount > 150) return 'red'
    else if (amount < 20) return 'green'

    return ''
  }

  return (
    <section className="book-details flex">
      <div>
        <h2 className="book-title">{book.title}</h2>
        <h3 className="sub-title">{book.subtitle}</h3>
        <p className="book-authors">
          {book.authors},{' '}
          <span className="book-date">
            {book.publishedDate} {getPublishDesc()}
          </span>
        </p>

        <p className="book-desc">{book.description}</p>

        <div className="extra-details flex">
          <span className="book-pages">
            {book.pageCount} pages {getReadingDesc()} ,
          </span>
          <span className="book-categories">
            {book.categories.join(' | ')},
          </span>
          <span className="book-language">{book.language}</span>
        </div>

        <p className={`book-price ${getPriceClass()}`}>
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
