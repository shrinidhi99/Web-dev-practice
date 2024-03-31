import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // counter is the variable and setCounter is the function to set it

  const addValue = () => {
    console.log('Value added');
    counter += 1;
    setCounter(counter);
  }

  const decreaseValue = () => {
    console.log('Value reduced');
    counter -= 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
