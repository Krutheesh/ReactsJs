import React from 'react'
import Header from './head_and_foot/Header'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div>
     
     <Header/>
     <Outlet/>
      
      
    </div>
  )
}

export default App
