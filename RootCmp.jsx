const { useState } = React

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
  const [page, setPage] = useState('books')

  function onSetPage(ev, page) {
    ev.preventDefault()
    setPage(page)
  }

  return (
    <section className="app">
      <AppHeader onSetPage={onSetPage} />

      <main className="container">
        {page === 'home' && <HomePage onSetPage={onSetPage} />}
        {page === 'about' && <AboutUs />}
        {page === 'books' && <BookIndex />}
      </main>
    </section>
  )
}
