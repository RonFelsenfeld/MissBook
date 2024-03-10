const { useState, useEffect, useRef } = React

export function BookEdit({ onAddBook, onFinish }) {
  const newBookRef = useRef({})

  function handleInput({ target }) {
    let { value, name: field, type } = target
    if (type === 'number') value = +value
    newBookRef.current = { ...newBookRef.current, [field]: value }
  }

  function onAddNewBook(ev) {
    ev.preventDefault()
    onAddBook(newBookRef.current)
    onFinish()
  }

  return (
    <form onSubmit={onAddNewBook}>
      <div className="input-container flex align-center">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="New title"
          onChange={handleInput}
        />
      </div>

      <div className="input-container flex align-center">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          min="0"
          placeholder="New price"
          onChange={handleInput}
        />
      </div>

      <button>Add book</button>
    </form>
  )
}
