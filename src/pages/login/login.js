import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import axiosConfig from '../../axiosConfig'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'
import { Navigate, Link } from 'react-router-dom'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [typeInputPassword, setTypeInputPassword] = useState('text')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    showPassword ? setTypeInputPassword('text') : setTypeInputPassword('password')
  }, [showPassword])

  function IconEyePassword() {
    return (
      <>
        <span className="input-group-text" onClick={handleClickEyePassword} id="inputShowPassword">
          {showPassword ? (
            <FontAwesomeIcon role="icon" icon={faEye} />
          ) : (
            <FontAwesomeIcon role="icon" icon={faEyeSlash} />
          )}
        </span>
      </>
    )
  }

  function handleClickEyePassword() {
    setShowPassword((p) => !p)
  }

  /**
   * Requête axios pour demander une tentative de connexion à l'api
   * @param {*} event
   */
  async function attemptLogin(event) {
    event.preventDefault()
    setLoading(true)

    await axiosConfig
      .post('/login', {
        email: mail,
        password: password,
      })
      .then((response) => {
        if (response && response.data) {
          // TODO : Replace this code with a check on status (should be 400)
          if (response.data.message === 'Pas toutes les informations nécéssaires') {
            toast.error('Au moins une information est manquante', 'error')
            setLoggedIn(false)
          } else {
            toast.success('Vous êtes connecté')
            const expireTime = 24 * 60 * 60 // 1 Day
            const OPTIONS = { expires: expireTime, path: '' }
            Cookies.set('auth_token', response.data.datas.token, OPTIONS)
            Cookies.set('firstname', response.data.datas.first_name, OPTIONS)
            Cookies.set('lastname', response.data.datas.last_name, OPTIONS)
            setLoggedIn(true)
          }
        }
      })
      .catch(() => {
        toast.error('Erreur de connexion', 'error')
        Cookies.remove('auth_token')
        setLoggedIn(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {loggedIn && <Navigate to="/dashboard" />}
      <div data-login className="container-fluid">
        <div className="row">
          <div className="background d-md-none d-lg-block col-xl-9 col-lg-6 p-0">
            <img className="background" src="background.webp" alt="background" />
          </div>
          <div className="col-md-12 col-lg-6 col-xl-3 p-5">
            <h2>Se connecter</h2>

            <form onSubmit={attemptLogin}>
              <div className="form-input">
                <label htmlFor="mail">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="mail"
                  id="mail"
                  placeholder="xyz@email.com"
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="password">Mot de passe</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <IconEyePassword />
                  </div>
                  <input
                    type={typeInputPassword}
                    className="form-control"
                    name="password"
                    id="password"
                    aria-describedby="inputShowPassword"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="error-message"></div>
                </div>
              </div>

              <button className="btn btn-primary" type="submit" disabled={loading}>
                Connexion
              </button>
              <Link className="btn btn-secondary" to="/register">
                Inscription
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
