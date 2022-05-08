import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axiosConfig from '../../axiosConfig'
import { Navigate, Link } from 'react-router-dom'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [typeInputPassword, setTypeInputPassword] = useState('text')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [registered, setRegistered] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    showPassword ? setTypeInputPassword('text') : setTypeInputPassword('password')
  }, [showPassword])

  function IconEyePassword() {
    return (
      <>
        <span className="input-group-text" id="inputShowPassword" onClick={handleClickEyePassword}>
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
   * Requête axios pour demander une tentative d'inscription à l'api
   * @param {*} event
   */
  async function attemptRegistration(event) {
    // axios pour demander une tentative de connexion à l'api
    event.preventDefault()
    setLoading(true)

    await axiosConfig
      .post('/register', {
        email: mail,
        password: password,
        first_name: firstname,
        last_name: lastname,
      })
      .then((response) => {
        if (response && response.data) {
          //  remove and check only http code to check if response is ok or not
          if (response.data.datas === 'User Already Exist. Please Login') {
            toast.error("L'utilisateur existe déjà", 'error')
          } else {
            toast.success('Vous avez bien été inscrit !')
            setRegistered(true)
          }
        }
      })
      .catch(() => {
        toast.error("Erreur d'inscription", 'error')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {registered && <Navigate to="/login" />}
      <div data-registration className="container-fluid">
        <div className="row">
          <div className="background d-md-none d-lg-block col-xl-9 col-lg-6 p-0">
            <img className="background" src="background.webp" alt="background" />
          </div>
          <div className="col-md-12 col-lg-6 col-xl-3 p-5">
            <h2>S'inscrire</h2>

            <form onSubmit={attemptRegistration}>
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

              <div className="form-input">
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="lastname">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>

              <button className="btn btn-primary" type="submit" disabled={loading}>
                Inscription
              </button>
              <Link className="btn btn-secondary" to="/login">
                Connexion
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
