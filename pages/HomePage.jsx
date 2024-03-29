const { Link } = ReactRouterDOM

export function HomePage() {
  return (
    <section className="home-page">
      <h1 className="main-title">Welcome to Miss Book!</h1>

      <p className="welcome-msg">
        This is our book shop website, where you can explore the amazing world
        of Reading!
      </p>

      <Link to="/book">
        <button className="btn-cta">Begin your reading journey</button>
      </Link>
    </section>
  )
}
