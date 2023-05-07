import { useState, useEffect } from 'react'

import './App.css'

const App = () => {
  
  const [behaviors,setBehaviors] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3500/behaviors')
      .then(response => response.json())
      .then(data => setBehaviors(data))
  },[])

  return (
    <div className="bg-black min-h-screen">
      <div className="bg-yellow-400 p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Bee Behaviors</h1>
        <ul>
          {behaviors.map((behavior) => (
            <li key={behavior.id} className="mb-4">
              <h2 className="text-xl font-bold text-white">{behavior.name}</h2>
              <p className="text-gray-200">{behavior.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
