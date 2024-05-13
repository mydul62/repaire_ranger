import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Firebase/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { SearchProvider } from './Hooks/SearchProvider.jsx'
// import { getTodos, postTodo } from '../my-api'
import {Helmet} from "react-helmet";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <SearchProvider>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
   <Helmet/>
   </QueryClientProvider >
   <Toaster />
   </AuthProvider>
  
  </SearchProvider>
  </React.StrictMode>,
)
