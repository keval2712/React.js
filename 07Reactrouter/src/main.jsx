import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/Header/About/About.jsx'
import Home from './components/Header/home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        
    path:'',
    element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact/>
      }
      ,
      {
        
        path:'Github',
        element:<Github/>
      }
      ,
      {
        path:'user/:userid',
        element:<User/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
