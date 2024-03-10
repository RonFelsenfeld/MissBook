import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onRemoveBook, onSelectBook }) {
  if (!books || !books.length) return <div>No cars to show</div>

  return (
    <ul className="book-list clean-list">
      {books.map(book => (
        <li key={book.id} className="flex column align-center">
          <BookPreview book={book} />

          <div className="book-actions">
            <button onClick={() => onSelectBook(book)}>Details</button>
            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
