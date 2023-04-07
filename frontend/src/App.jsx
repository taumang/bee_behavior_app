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
    <div>
      <h1>Bee Behaviors</h1>
      <ul>
        {behaviors.map(behavior => (
          <li key={behavior.id}>
            <h2>{behavior.name}</h2>
            <p>{behavior.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
