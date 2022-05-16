import React from 'react'
import { render } from 'react-dom'
import Router from './routes/router'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')

render(
  <BrowserRouter role="router">
    <Router />
  </BrowserRouter>,
  rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
