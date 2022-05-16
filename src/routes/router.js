import React from 'react'
import Cookies from 'js-cookie'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Login from '../pages/login/login'
import Disconnect from '../pages/disconnect/disconnect'
import Register from '../pages/register/register'
import Dashboard from '../pages/dashboard/dashboard'
import NotFound from '../pages/notfound/notfound'
import { toast } from 'react-toastify'
import jwtDecode from 'jwt-decode'
import Layout from '../components/layout'
import Footer from '../components/footer'

export default function Router() {
  function RequireAuth({ children }) {
    let location = useLocation()
    const token = Cookies.get('auth_token') ? Cookies.get('auth_token') : null
    let logged = false

    if (token && token !== null) {
      let tokenExpiration = jwtDecode(token).exp
      let dateNow = new Date()

      if (tokenExpiration < dateNow.getTime() / 1000) {
        Cookies.remove('auth_token')
        toast.error('Token invalide, veuillez vous reconnecter', 'error')
      } else {
        logged = true
      }
    }
    if (!logged) {
      // Redirect them to the /login page, but save the current location they were
      return <Navigate to="/login" state={{ from: location }} />
    }

    return children
  }

  const LogoutRoute = ({ Component }) => {
    return (
      <>
        <Component />
        <Footer />
      </>
    )
  }

  const LoginRoute = ({ Component }) => {
    return (
      <Layout>
        <Component />
      </Layout>
    )
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Navigate to="/dashboard" />
          </RequireAuth>
        }
      />
      <Route path="login" element={<LogoutRoute Component={Login} />} />
      <Route path="disconnect" element={<Disconnect />} />
      <Route path="register" element={<LogoutRoute Component={Register} />} />
      <Route
        path="dashboard"
        element={
          <RequireAuth>
            <LoginRoute Component={Dashboard} />
          </RequireAuth>
        }
      />
      <Route path="*" element={<LoginRoute Component={NotFound} />} />
    </Routes>
  )
}
