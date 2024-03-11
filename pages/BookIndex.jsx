const { useState, useEffect } = React

import { BookEdit } from './BookEdit.jsx'
import { BookDetails } from './BookDetails.jsx'

import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'

import { bookService } from './../services/book.service.js'

export function BookIndex() {
  const [books, setBooks] = useState(null)
  const [selectedBook, setSelectedBook] = useState(null)
  const [isAddingBook, setIsAddingBook] = useState(false)
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

  function onAddBook(book) {
    bookService
      .save(book)
      .then(loadBooks)
      .catch(err => console.log('Had issues with adding book:', err))
  }

  function onSetFilter(fieldsToUpdate) {
    setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...fieldsToUpdate }))
  }

  return (
    <section className="books-container">
      {!selectedBook && !isAddingBook && (
        <React.Fragment>
          <button
            onClick={() => setIsAddingBook(prevIsAdding => !prevIsAdding)}
          >
            Add book
          </button>
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

      {isAddingBook && (
        <BookEdit
          onAddBook={onAddBook}
          onFinish={() => setIsAddingBook(false)}
        />
      )}
    </section>
  )
}
