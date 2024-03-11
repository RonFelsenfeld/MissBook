const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'

export function AddReview({ bookId, onCloseReview }) {
  const [reviewDetails, setReviewDetails] = useState(
    bookService.getEmptyReview()
  )

  function onAddReview(ev) {
    ev.preventDefault()
    bookService.addReview(bookId, reviewDetails).then(console.log)
  }

  function handleChange({ target }) {
    let { value, name: field, type } = target

    switch (type) {
      case ('number', 'select-one'):
        value = +value || 0
        break
      case 'date':
        value = new Date(value).toLocaleDateString()
        break
      default:
        break
    }

    setReviewDetails(prevReviewDetails => ({
      ...prevReviewDetails,
      [field]: value,
    }))
  }

  return (
    <section className="add-review-container">
      <button onClick={onCloseReview} className="btn-close">
        X
      </button>
      <h3 className="review-title">Add review</h3>

      <form onSubmit={onAddReview} className="flex column">
        <div className="input-container flex align-center">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Your Name"
            name="fullName"
            onChange={handleChange}
            value={reviewDetails.fullName}
          />
        </div>

        <div className="input-container flex align-center">
          <label htmlFor="rating">Rating</label>
          <select name="rating" id="rating" onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="input-container flex align-center">
          <label htmlFor="readAt">Read at</label>
          <input
            type="date"
            id="readAt"
            name="readAt"
            onChange={handleChange}
          />
        </div>

        <button className="btn-submit">Add Review</button>
      </form>
    </section>
  )
}
