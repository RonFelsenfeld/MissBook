const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function handleFilterChange({ target }) {
    let { value, name: field, type } = target
    if (type === 'number') value = +value
    if (type === 'checkbox') value = target.checked
    setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
  }

  return (
    <section className="book-filter flex align-center">
      <h2 className="filter-title">Filter Books</h2>

      <form>
        <div className="input-container flex align-center">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="By title"
            value={filterByToEdit.title}
            onChange={handleFilterChange}
          />
        </div>

        <div className="input-container flex align-center">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            placeholder="By max price"
            min="0"
            value={filterByToEdit.maxPrice || ''}
            onChange={handleFilterChange}
          />
        </div>

        <div className="input-container flex align-center">
          <label htmlFor="pageCount">Pages</label>
          <input
            type="number"
            name="pagesCount"
            id="pagesCount"
            placeholder="By pages"
            min="0"
            value={filterByToEdit.pagesCount || ''}
            onChange={handleFilterChange}
          />
        </div>

        <div className="input-container flex align-center">
          <label htmlFor="pageCount">on Sale</label>
          <input
            type="checkbox"
            name="onSale"
            id="onSale"
            checked={filterByToEdit.onSale}
            onChange={handleFilterChange}
          />
        </div>
      </form>
    </section>
  )
}
