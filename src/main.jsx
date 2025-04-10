import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
 let router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  errorElement: <h1>Page Not Found</h1>,
  children: [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: 'products',
      element: <Products/>,
    },
    {
      path: 'product/:id',
      element: <SingleProduct/>,
    },
  ]

 }])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router }/>
  )
