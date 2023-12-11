import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import Name from './test.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const anotherEle = (
  <a href='' target='_blank' > visit knowere</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.co.in', target:'_blank'},
  'click me for nothing'
)
   
    root.render(

       
      <App />
      
    //reactElement
   
)
