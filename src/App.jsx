import { useState } from 'react'
import React from 'react'
import Header from "./Components/Header"

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <Header/>
    </>
  );
}


export default App;