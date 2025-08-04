import { useState } from 'react'
import React from 'react'
import Header from "./Components/Header"
import Body from "./Components/Body"
import { Outlet } from 'react-router'
import Footer from "./Components/Footer"

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  );
}


export default App;