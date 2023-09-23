import { useState } from 'react'

import GlobalStyle from './Components/globalStyles'
import NavBar from './Components/navigation'
import LandingContent from './Components/landing'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <div className="App">
      <GlobalStyle />
      <NavBar />
      <LandingContent />
    </div>
    </>
  )
}

export default App
