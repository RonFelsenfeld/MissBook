export function GoogleBookPreview({ book }) {
  return (
    <article className="google-book-preview flex align-center">
      <span className="book-title">{book.title}</span>
      <button className="btn-add">+</button>
    </article>
  )
}
