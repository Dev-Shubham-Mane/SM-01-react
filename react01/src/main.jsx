import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import Name from './test.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const anotherEle = (
  <a href='' target='_blank' > visit knowere</a>
)

const reactElement = (
  'a',
  {href :'', target :'_target'},
  'click me for nothing'
)

  root.render(

  reactElement
   
)
