import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  let [counter, setCount]  = useState(10)
  const addOne = () => {
      //console.log(counter)
      if(counter >= 21){
          return counter    
      } else{
        setCount(counter++)
      }
      
  }

  const minusOne = () => {
    if(counter <=0 ){
      return counter
    }else{
      setCount(counter--)
    }

  }

  return (
    <>
      <h1> Hello World </h1>
      <h2> Hello India </h2>

      
      <button onClick={addOne} >Add One : {counter}</button>
      <br />
      <br />
      <button onClick={minusOne} >Minus One : {counter}</button>
    </>
  )
}

export default App
