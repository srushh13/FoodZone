import { useState } from 'react'
import React from 'react'
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import { Outlet } from 'react-router'

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