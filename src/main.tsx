import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Products from './pages/Products/Products.tsx'
import './index.css'
import './styles/global.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Bucket from './pages/Bucket.tsx'
import Reviews from './pages/Reviews.tsx'
import Contacts from './pages/Contacts.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Products />
      </>
    )
  },
  {
    path: "/cart",
    element: <><Bucket></Bucket></>
  },
  {
    path: "/reviews",
    element: <><Reviews></Reviews></>
  },
  {
    path: "/contacts",
    element: <><Contacts></Contacts></>
  },
  {
    path: "/about",
    element: <><About></About></>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
