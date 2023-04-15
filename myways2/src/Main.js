import React from 'react'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Store from './pages/Store'
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';

export const myContext = createContext()
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
  {
    path:"/home",
    element:<Home/>,
  },
  {
    path:"/food",
    element:<Store/>,
  },
  {
    path:"*",
    element:<PageNotFound/>,
  } ]
},
])


function Main() {

const [food, setFood] = useState([])

  return (
    <div>
      <myContext.Provider value={{food,setFood}}>
         <RouterProvider router={appRouter}/>
    </myContext.Provider>
    </div>
  )
}

export default Main
