import { useState } from 'react'

import SignupPage from './Pages/User/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SignupPage/>
    </>
  )
}

export default App
