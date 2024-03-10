const { useState } = React

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
  const [page, setPage] = useState('books')

  return (
    <section className="app">
      <AppHeader setPage={setPage} />

      <main className="container">
        {page === 'home' && (
          <HomePage onExploreBooks={() => setPage('books')} />
        )}
        {page === 'about' && <AboutUs />}
        {page === 'books' && <BookIndex />}
      </main>
    </section>
  )
}
