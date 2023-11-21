import React from 'react'
import ReactDOM from 'react-dom/client'
import Products from './pages/Products'
import './styles/global.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Favorites from './pages/Favorites';

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
    element: <><Cart /></>
  },
  {
    path: "/ice_cream_merchant_app/about",
    element: <><AboutUs /></>
  },
  {
    path: "/ice_cream_merchant_app/favorites",
    element: <><Favorites /></>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
