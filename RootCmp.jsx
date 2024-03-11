const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { BookDetails } from './pages/BookDetails.jsx'

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />

        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/book" element={<BookIndex />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
          </Routes>
        </main>
      </section>
    </Router>
  )
}
