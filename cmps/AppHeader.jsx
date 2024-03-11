export function AppHeader({ onSetPage }) {
  return (
    <header className="app-header full flex align-center justify-between">
      <h1>Miss Book</h1>

      <nav className="app-nav">
        <a href="" onClick={ev => onSetPage(ev, 'home')}>
          Home |{' '}
        </a>
        <a href="" onClick={ev => onSetPage(ev, 'about')}>
          About |{' '}
        </a>
        <a href="" onClick={ev => onSetPage(ev, 'books')}>
          Books
        </a>
      </nav>
    </header>
  )
}
