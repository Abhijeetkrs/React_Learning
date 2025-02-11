// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    key: 23,
    ind: true
  }
  const myArr = [7,8,9]

  return (
    <>
      <h1 className="bg-green-500 text-2xl rounded-2xl text-black ">
        Tailwind
      </h1>
      <Card title="Card 1" subtitle="Abhijeet"  myArr={myArr} myObj={myObj}/>
      <Card title="Card 2" subtitle="AK"/>
    </>
  );
}

export default App;
