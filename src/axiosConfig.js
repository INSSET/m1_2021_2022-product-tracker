// First we need to import axios.js
import axios from 'axios'

const apiUrl = process.env.NODE_ENV === 'production' ? 'http://XXX:5000/api' : 'http://localhost:5000/api'

// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: apiUrl,
})

axios.defaults.headers.common['Authorization'] = '123'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default instance
