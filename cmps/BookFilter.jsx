const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'

export function BookFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function handleFilterChange({ target }) {
    let { value, name: field, type } = target
    if (type === 'number') value = +value
    setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
  }

  return (
    <section className="book-filter">
      <h2>Filter Books</h2>

      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="By title"
          value={filterByToEdit.title}
          onChange={handleFilterChange}
        />

        <label htmlFor="maxPrice">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          placeholder="By max price"
          max={bookService.MAX_PRICE}
          min="0"
          value={filterByToEdit.maxPrice || ''}
          onChange={handleFilterChange}
        />
      </form>
    </section>
  )
}
