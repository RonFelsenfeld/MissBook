const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { BookAdd } from './pages/BookAdd.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { AboutTeam } from './cmps/AboutTeam.jsx'
import { AboutGoal } from './cmps/AboutGoal.jsx'

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />

        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutUs />}>
              <Route path="/about/team" element={<AboutTeam />} />
              <Route path="/about/goal" element={<AboutGoal />} />
            </Route>

            <Route path="/book" element={<BookIndex />} />
            <Route path="/book/add" element={<BookAdd />} />

            <Route path="/book/:bookId" element={<BookDetails />} />
            <Route path="/book/edit" element={<BookEdit />} />
            <Route path="/book/edit/:bookId" element={<BookEdit />} />
          </Routes>
        </main>

        <UserMsg />
      </section>
    </Router>
  )
}
