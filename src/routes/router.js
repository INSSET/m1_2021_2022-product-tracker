import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Dashboard from '../pages/dashboard/dashboard'
import NotFound from '../pages/404/notfound'

export default function Router() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoggedIn(() => Cookies.get('auth_token') && Cookies.get('auth_token') !== null)
    }
  }, [loggedIn])

  return (
    <BrowserRouter role="router">
      <Routes>
        <Route>
          <Route path="/" element={!loggedIn ? <Dashboard /> : <Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
