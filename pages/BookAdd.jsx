const { useState, useEffect, useRef } = React

import { googleBookService } from '../services/googleBook.service.js'

import { GoogleBookList } from '../cmps/GoogleBookList.jsx'
import { utilService } from '../services/util.service.js'

export function BookAdd() {
  const [searchedBook, setSearchedBook] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const loadResultsDebounce = useRef(utilService.debounce(loadResults, 1000))
  const searchInputRef = useRef()

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  function loadResults(val) {
    googleBookService
      .query(val)
      .then(results => {
        setSearchResults(results)
      })
      .catch(err => {
        console.error('Had issues with loading results:', err)
      })
  }

  function handleChange({ target }) {
    const { value } = target
    if (!value) setSearchResults([])

    setSearchedBook(value)
    loadResultsDebounce.current(value)
  }

  return (
    <section className="google-book-section flex column align-center">
      <h3>Search book on google</h3>

      <form>
        <input
          ref={searchInputRef}
          className="search-input"
          placeholder="Search for books"
          type="search"
          name="search"
          onChange={handleChange}
          value={searchedBook}
        />
      </form>

      {searchResults && <GoogleBookList books={searchResults} />}
    </section>
  )
}
