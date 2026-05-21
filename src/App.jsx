import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

//   createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />, parent component layout
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/login", element: <Login /> } outlet
//     ]
//   }
// ])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    },
     {
      path: "/user",
      element: <><Navbar /><User /></>
    }

  ])

  return (
    <>
      <div>
        <h1>Get started</h1>
      <RouterProvider router={router} />

      </div>


      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
