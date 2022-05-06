import Header from './header'
import Footer from './footer'
import '../styles/main.scss'
import { useEffect } from 'react'

export default function Layout({ children }) {
  /* Using bootstrap js */
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
