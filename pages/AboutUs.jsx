const { Link, Outlet } = ReactRouterDOM

export function AboutUs() {
  return (
    <section className="about-container">
      <h3 className="about-title">Our leading approach - Service Above All!</h3>
      <p>Wer'e located at Israel, Tel Aviv.</p>
      <p>Come check out!</p>

      <nav className="flex column">
        <Link to="/about/team">Check out our team!</Link>
        <Link to="/about/goal">Our Goal?</Link>
      </nav>

      <Outlet />
    </section>
  )
}
