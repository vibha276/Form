import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex", "justify-content": "center", alignItems: "center", width: "100%" }} className='App'>
      <Form>

      </Form>
    </div>
  )
}

export default App
