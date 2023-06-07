import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='lg:w-5/6 mx-auto'>
      <AuthProvider>
        <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </AuthProvider>
    </div>
    
  </React.StrictMode>,
)
