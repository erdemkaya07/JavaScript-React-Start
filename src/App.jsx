import React, { useState } from 'react'

function App() {

const [name, setName] = useState('Erdem')
const [showName, setShowName] = useState(false)

const [isActive, setIsActive] = useState(false)

const toggleName = () => {
  setShowName(value => !value)
}

  return (
    <div className='container'>
     <h1>Conditional Rendering</h1>

    {/*  { showName ? <p>{name}</p> : <p>Inget namn</p> } */}

    {/*  { showName && <p>{name}</p> } */}

     {/* { name && <p>{name}</p>} */}

     <button onClick={toggleName}>{showName ? 'Hide Name' : 'Show Name'}</button>

    {showName && <p>Name: {name}</p> }

    <button onClick={() => {
      setIsActive(prev => !prev)
    }}>Click Name</button>

    <div className={`square ${isActive ? 'active' : ''}`}>

    </div>
    </div>
  )
}

export default App