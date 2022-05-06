export default function Header() {
  return (
    <>
      <header className="header">
        <nav data-header className="navbar">
          <a className="title" href="/">
            Product Tracker
          </a>
          <div className="d-flex">
            <a href="/login">Connexion</a>
            <a href="/register">Inscription</a>
          </div>
        </nav>
      </header>
    </>
  )
}
