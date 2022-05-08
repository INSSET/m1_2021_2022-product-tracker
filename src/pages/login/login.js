import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [typeInputPassword, setTypeInputPassword] = useState('text')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

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

    await axios
      .post('/api/login', {
        key_authentification: JSON.stringify(event.target.password.value),
        mail: mail,
        password: password,
      })
      .then((response) => {
        if (response && response.data) {
          Cookies.set('auth_token', response.data.auth_token)
        }
      })
      .catch(() => {
        toast.error('Erreur de connexion', 'error')
        Cookies.remove('auth_token')
      })
  }

  return (
    <>
      <div data-login className="container-fluid">
        <ToastContainer />
        <div className="row">
          <div className="background hidden-md col-lg-9 p-0">
            <img className="background" src="background.png" alt="background" />
          </div>
          <div className="col-md-12 col-lg-3 p-5">
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

              <button className="btn btn-primary" type="submit">
                Connexion
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
