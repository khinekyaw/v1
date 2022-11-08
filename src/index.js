import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'
import './styles/index.css'

import Root from './pages/root'
import ErrorPage from './pages/error'
import Home from './pages/home'
import Experience from './pages/experience'
import Work from './pages/work'
import Contact from './pages/contact'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'experience',
        element: <Experience />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
