import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 15;
  let [counter, setCounter] = useState(15);
  
 const addFunc = () => {
    console.log(`added`)
    if(counter<20)
      setCounter(counter+1)
    // counter = counter + 1
    console.log(`counter value : ${counter}`)

  }
 
const removeFunc = () => {
  console.log('removed')
  if(counter>0)
    setCounter(counter-1);
// counter = counter - 1;
  console.log(`counter value : ${counter}`)

}

  return (
    <>
      <h1>Counter Implementation</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addFunc}>Add value {counter}</button>
      <br/>
      <button onClick={removeFunc}>Remove value {counter}</button>
    </>
  )
}

export default App
