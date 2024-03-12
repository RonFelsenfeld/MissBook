export function GoogleBookList({ books }) {
  return (
    <ul className="clean-list">
      {books.map(book => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  )
}
