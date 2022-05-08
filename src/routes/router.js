import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Dashboard from '../pages/dashboard/dashboard'
import NotFound from '../pages/notfound/notfound'

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
          {/* TODO : INVERT /login AND /dashboard !!! */}
          <Route exact path="/" element={!loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
