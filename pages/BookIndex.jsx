const { useState, useEffect } = React

import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'

import { bookService } from './../services/book.service.js'
import { BookDetails } from './BookDetails.jsx'

export function BookIndex() {
  const [books, setBooks] = useState(null)
  const [selectedBook, setSelectedBook] = useState(null)
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

  function onSelectBook(book) {
    setSelectedBook(book)
  }

  function onSetFilter(fieldsToUpdate) {
    setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...fieldsToUpdate }))
  }

  return (
    <section className="books-container">
      {!selectedBook && (
        <React.Fragment>
          <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
          <BookList
            books={books}
            onRemoveBook={onRemoveBook}
            onSelectBook={onSelectBook}
          />
        </React.Fragment>
      )}

      {selectedBook && (
        <BookDetails
          book={selectedBook}
          onGoBack={() => setSelectedBook(null)}
        />
      )}
    </section>
  )
}
