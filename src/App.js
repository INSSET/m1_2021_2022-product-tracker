import './App.css'
import Layout from './components/layout'
import './styles/main.scss'

function App({ Component, pageProps }) {
  return (
    <Layout id="root">
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
