const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouter

import { bookService } from '../services/book.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function BookEdit() {
  const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
  const navigate = useNavigate()
  const { bookId } = useParams()

  useEffect(() => {
    if (bookId) loadBook()
  }, [])

  function loadBook() {
    bookService
      .get(bookId)
      .then(setBookToEdit)
      .catch(err => {
        console.log('Had issues with loading book', err)
        navigate('/book')
      })
  }

  function handleInput({ target }) {
    let { value, name: field, type } = target
    if (type === 'number') value = +value
    if (field === 'amount') {
      const listPrice = { ...bookToEdit.listPrice, [field]: value }
      setBookToEdit(prevBookToEdit => ({ ...prevBookToEdit, listPrice }))
      return
    }
    setBookToEdit(prevBookToEdit => ({ ...prevBookToEdit, [field]: value }))
  }

  function onSaveBook(ev) {
    ev.preventDefault()
    if (!isValidBook()) return showErrorMsg('Must enter all details')

    bookService
      .save(bookToEdit)
      .then(savedBook => {
        showSuccessMsg(`Book saved successfully ${savedBook.id}`)
      })
      .catch(err => {
        console.log('Had issues with saving book: ', err)
        showSuccessMsg(`Could not save book`)
      })
      .finally(() => navigate('/book'))
  }

  function isValidBook() {
    return !!bookToEdit.title && !!bookToEdit.listPrice.amount
  }

  const { title } = bookToEdit
  const { amount } = bookToEdit.listPrice

  return (
    <section className="book-edit flex column align-center">
      <h3>Edit Book</h3>

      <form onSubmit={onSaveBook} className="flex column">
        <div className="input-container flex align-center">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="New title"
            name="title"
            onChange={handleInput}
            value={title}
          />
        </div>

        <div className="input-container flex align-center">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            min="0"
            placeholder="New price"
            name="amount"
            onChange={handleInput}
            value={+amount || ''}
          />
        </div>

        <button>Save Book</button>
      </form>
    </section>
  )
}
