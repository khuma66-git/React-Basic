import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)

//   createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/login", element: <Login /> }
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
