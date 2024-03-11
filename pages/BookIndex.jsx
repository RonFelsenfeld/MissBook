const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'

import { bookService } from './../services/book.service.js'

export function BookIndex() {
  const [books, setBooks] = useState(null)
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

  useEffect(() => {
    loadBooks()
  }, [filterBy])

  function loadBooks() {
    bookService
      .query(filterBy)
      .then(setBooks)
      .catch(err => console.log('Had issues with loading books: ', err))
  }

  function onRemoveBook(bookId) {
    bookService
      .remove(bookId)
      .then(() => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId))
      })
      .catch(err => console.log('Has issues with removing book', err))
  }

  function onSetFilter(fieldsToUpdate) {
    setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...fieldsToUpdate }))
  }

  return (
    <section className="books-container">
      <Link to="/book/edit">
        <button>Add book</button>
      </Link>

      <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
      <BookList books={books} onRemoveBook={onRemoveBook} />
    </section>
  )
}
