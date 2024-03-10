const { useState, useEffect } = React

import { BookList } from '../cmps/BookList.jsx'
import { bookService } from './../services/book.service.js'

export function BookIndex() {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    bookService
      .query()
      .then(setBooks)
      .catch(err => console.log('Had issues with loading books: ', err))
  }

  return (
    <section className="books-container">
      <BookList books={books} />
    </section>
  )
}
