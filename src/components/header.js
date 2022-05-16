import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

export default function Header() {
  const [firstname, setFirstname] = useState(null)

  useEffect(() => {
    const token = Cookies.get('auth_token') ? Cookies.get('auth_token') : null

    if (token) {
      setFirstname(Cookies.get('firstname'))
    } else {
      setFirstname(null)
    }
  }, [])

  return (
    <>
      <header className="header">
        <nav data-header className="navbar">
          <NavLink className="title" to="/">
            Product Tracker
          </NavLink>
          <div className="d-flex">
            {firstname ? (
              <>
                <span>Bonjour, {firstname}</span>
                <NavLink to="/disconnect">Déconnexion</NavLink>
              </>
            ) : (
              <>
                <NavLink to="login">Connexion</NavLink>
                <NavLink to="register">Inscription</NavLink>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}
