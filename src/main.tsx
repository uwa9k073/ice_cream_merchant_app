import React from 'react'
import ReactDOM from 'react-dom/client'
import Products from './pages/Products/index.ts'
import './styles/global.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Bucket from './pages/Bucket.tsx'
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
    path: "/about",
    element: <><About></About></>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
