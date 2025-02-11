import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [color, setColor] = useState("#01bf82");

  return (
    
      <div className='w-full h-screen bg-black duration-200' style={{backgroundColor : color}}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0" >
        <div className='bg-white rounded-3xl flex flex-wrap justify-between gap-3 px-4 py-3 shadow-lg
        '>
          <button className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>  
          <button className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "gray"}} onClick={() => setColor("gray")}>Gray</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-black" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-black" style={{backgroundColor: "pink"}}onClick={() => setColor("pink")}>Pink</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-black" style={{backgroundColor: "lavender"}} onClick={() => setColor("lavender")}>Lavender</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-black" style={{backgroundColor: "white"}} onClick={() => setColor("white")}>White</button>
          <button className="outline-none px-4 rounded-full shadow-lg text-white" style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
          
        </div>
        </div>
      </div>
    
  )
}

export default App
