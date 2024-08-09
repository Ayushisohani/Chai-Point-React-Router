import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Componenet/Home/Home.jsx'
import About from './Componenet/About/About.jsx'
import Contact from './Componenet/Contact/Contact.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Insta,{InstaInfoLoader} from './Componenet/Insta/Insta.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      
      <Route 
      loader={InstaInfoLoader}
      path='Insta' 
      element={<Insta />}
       />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
