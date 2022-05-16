import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

export default function Disconnect() {
  const [disconnect, setDisconnect] = useState(false)

  useEffect(() => {
    Cookies.remove('auth_token')
    Cookies.remove('firstname')
    setDisconnect(true)
  }, [])

  return <>{disconnect && <Navigate to="/login" />}</>
}
