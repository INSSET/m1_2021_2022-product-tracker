import Header from './header'
import Footer from './footer'
import '../styles/main.scss'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

export default function Layout({ children }) {
  /* Using bootstrap js */
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
    console.log('env:  ', process.env)
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </>
  )
}
