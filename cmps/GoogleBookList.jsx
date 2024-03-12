import { GoogleBookPreview } from './GoogleBookPreview.jsx'

export function GoogleBookList({ books }) {
  return (
    <ul className="google-book-list clean-list">
      {books.map(book => (
        <li className="google-book" key={book.id}>
          <GoogleBookPreview book={book} />
        </li>
      ))}
    </ul>
  )
}
