import React, { useState } from 'react'

function App() {

  /* let counter = 0; */
  const [counter, setCounter] = useState(0)
  /* const handleClick = () => {
    /* counter++ */
    /* setCounter(counter + 1) */
   /* setCounter(prev => prev +1)
  } */
  /* console.log(counter)
 */


  const handleClick = (amount) => {
    setCounter(prev => {
      return prev + amount
    })
  }

  const [firstName, setFirstName] = useState('erdem')
  const [lastName, setlastName] = useState('kaya')


  /* const [fullName, setfullName] = useState(firstName + ' ' + lastName) */

  const fullName = firstName + ' ' + lastName;

  return (
    <div className='container'>
      <h1>{ counter }</h1>
      {/* <button onClick={handleClick}>Increment</button> */}
      <button onClick={() => handleClick(1)}>Increment</button>
      <button onClick={() => handleClick(10)}>Increment</button>
      <button onClick={() => handleClick(100)}>Increment</button>

      <div>
      </div>
        <p>{firstName} {lastName}</p>
        <p>{fullName}</p>
        <button onClick={() => {setlastName('svensson')}}>ChangeName</button>
    </div>
  )
}

export default App