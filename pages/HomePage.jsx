export function HomePage({ onSetPage }) {
  return (
    <section className="home-page">
      <h1 className="main-title">Welcome to Miss Book!</h1>
      <p className="welcome-msg">
        This is our book shop website, where you can explore the amazing world
        on Reading!
      </p>
      <button className="btn-cta" onClick={ev => onSetPage(ev, 'books')}>
        Start Exploring{' '}
      </button>
    </section>
  )
}
