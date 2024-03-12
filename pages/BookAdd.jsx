import { utilService } from '../services/util.service.js' // ! Remove after demo

import { GoogleBookList } from '../cmps/GoogleBookList.jsx'

export function BookAdd() {
  const book1 = { title: 'title1', id: utilService.makeId() }
  const book2 = { title: 'title2', id: utilService.makeId() }
  const book3 = { title: 'title3', id: utilService.makeId() }
  const book4 = { title: 'title4', id: utilService.makeId() }
  const book5 = { title: 'title5', id: utilService.makeId() }

  const demoData = [book1, book2, book3, book4, book5]

  return (
    <section>
      <h3>Search book on google</h3>
      <GoogleBookList books={demoData} />
    </section>
  )
}
