export function GoogleBookPreview({ book, onAddBook }) {
  const { title } = book.volumeInfo

  return (
    <article className="google-book-preview flex align-center">
      <span className="book-title">{title}</span>
      <button className="btn-add" onClick={() => onAddBook(book)}>
        +
      </button>
    </article>
  )
}
