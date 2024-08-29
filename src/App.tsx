import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PropertyPage from "./pages/PropertyPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/property/:id",
    element: <PropertyPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
