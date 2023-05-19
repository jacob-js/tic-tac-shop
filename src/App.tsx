import { useState } from 'react'
import './App.css'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button type='primary'>Hello</Button>
    </>
  )
}

export default App
