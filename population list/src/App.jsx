import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes } from './components/Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes/>
      
    </div>
  )
}

export default App
