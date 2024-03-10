import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const MAX_PRICE = 120
const BOOKS_KEY = 'booksDB'
_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
  getDefaultFilter,
  MAX_PRICE,
}

// For debugging
window.bs = bookService

function query(filterBy = getDefaultFilter()) {
  return storageService.query(BOOKS_KEY).then(books => {
    if (filterBy.title) {
      const regex = new RegExp(filterBy.title, 'i')
      books = books.filter(book => regex.test(book.title))
    }

    if (filterBy.maxPrice) {
      books = books.filter(book => book.listPrice.amount <= filterBy.maxPrice)
    }
    return books
  })
}

function get(bookId) {
  return storageService.get(BOOKS_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOKS_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOKS_KEY, book)
  } else {
    return storageService.post(BOOKS_KEY, book)
  }
}

function getEmptyBook() {
  return {
    title: '',
    description: '',
    thumbnail: '',
    listPrice: {
      amount: 0,
      currencyCode: 'EUR',
      isOnSale: Math.random() > 0.5 ? true : false,
    },
  }
}

function getDefaultFilter() {
  return { title: '', maxPrice: MAX_PRICE }
}

////////////////////////////////////////////////////

function _createBooks() {
  let books = utilService.loadFromStorage(BOOKS_KEY)
  if (!books || !books.length) {
    books = []
    books.push(_createBook('Game Of Thrones'))
    books.push(_createBook('Harry Potter'))
    books.push(_createBook('Investments Guide'))
    utilService.saveToStorage(BOOKS_KEY, books)
  }
}

function _createBook(title) {
  const book = getEmptyBook()
  book.title = title
  book.id = utilService.makeId()
  book.description = utilService.makeLorem(20)
  book.thumbnail = utilService.getRandomImg()
  book.listPrice.amount = utilService.getRandomIntInclusive(1, MAX_PRICE)
  return book
}
