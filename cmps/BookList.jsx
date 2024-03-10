import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onRemoveBook }) {
  if (!books || !books.length) return <div>No cars to show</div>

  return (
    <ul className="book-list clean-list">
      {books.map(book => (
        <li key={book.id}>
          <BookPreview book={book} />

          <div className="book-actions">
            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
