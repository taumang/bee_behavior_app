import { useState, useEffect } from 'react';
import React from 'react'

const home_page = () => {
    const [behaviors, setBehaviors] = useState([]); // State to store the behaviors data
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
  
    useEffect(() => {
      fetch('http://localhost:3500/behaviors')
        .then((response) => response.json())
        .then((data) => setBehaviors(data));
    }, []);

    const filteredBehaviors = behaviors.filter((behavior) =>
    behavior.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Filter behaviors based on search term

  return (
    <div>
      <div className="bg-black min-h-screen">
      <div className="bg-yellow-400 p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Bee Behaviors</h1>
        
        {/* Search bar */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search behaviors"
            className="border border-gray-300 bg-white py-2 px-4 rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul>
          {filteredBehaviors.map((behavior) => (
            <li key={behavior.id} className="mb-4">
              <h2 className="text-xl font-bold text-white">{behavior.name}</h2>
              <p className="text-gray-200">{behavior.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default home_page