import { BookPreview } from './BookPreview.jsx'

export function BookList({ books }) {
  if (!books || !books.length) return <div>loading...</div>

  return (
    <ul className="book-list">
      {books.map(book => (
        <li key={book.id}>
          <BookPreview book={book} />
        </li>
      ))}
    </ul>
  )
}
