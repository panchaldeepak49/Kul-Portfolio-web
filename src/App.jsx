import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Path from '../src/routes/Path'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Path />
      </Router>
    </>
  )
}

export default App
