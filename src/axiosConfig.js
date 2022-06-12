// First we need to import axios.js
import axios from 'axios'

// Put this in env vars (not working for now)
const apiUrl = process.env.REACT_APP_API_URL || 'https://ccmprojetfinal.ew.r.appspot.com/'
console.log('URL Api', process.env.REACT_APP_API_URL)
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  },
  baseURL: apiUrl,
})

export default instance
