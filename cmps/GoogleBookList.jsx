import { bookService } from '../services/book.service.js'
import {
  showSuccessMsg,
  showErrorMsg,
} from './../services/event-bus.service.js'

import { GoogleBookPreview } from './GoogleBookPreview.jsx'

export function GoogleBookList({ books }) {
  function onAddBook(book) {
    bookService
      .addGoogleBook(book)
      .then(addedBook => {
        showSuccessMsg('Book added successfully')
      })
      .catch(err => {
        console.error('Had issues with adding book:', err)
        showErrorMsg('Book Already exists')
      })
  }

  return (
    <ul className="google-book-list clean-list">
      {books.map(book => (
        <li className="google-book" key={book.id}>
          <GoogleBookPreview book={book} onAddBook={onAddBook} />
        </li>
      ))}
    </ul>
  )
}
