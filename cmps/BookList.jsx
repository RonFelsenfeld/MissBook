const { Link } = ReactRouterDOM

import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onRemoveBook }) {
  if (!books || !books.length)
    return <div className="nothing-to-show">No books to show</div>

  return (
    <ul className="book-list clean-list">
      {books.map(book => (
        <li key={book.id} className="flex column align-center">
          <BookPreview book={book} />

          <div className="book-actions">
            <Link to={`/book/${book.id}`}>
              <button>Details</button>
            </Link>

            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
