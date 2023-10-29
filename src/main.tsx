import React from 'react'
import ReactDOM from 'react-dom/client'
import Products from './pages/Products/index.ts'
import './styles/global.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About.tsx'
import Cart from './pages/Cart/index.ts';

const router = createBrowserRouter([
  {
    path: "/ice_cream_merchant_app",
    element: (
      <>
        <Products />
      </>
    )
  },
  {
    path: "/ice_cream_merchant_app/cart",
    element: <><Cart></Cart></>
  },
  {
    path: "/ice_cream_merchant_app/about",
    element: <><About></About></>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
