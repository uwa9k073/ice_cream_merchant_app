import React from 'react'
import ReactDOM from 'react-dom/client'
import Products from './pages/Products'
import './styles/global.scss'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Favorites from './pages/Favorites';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Favorites />
      </>
    )
  },
  {
    path: "/cart",
    element: <><AboutUs /></>
  },
  {
    path: "/about",
    element: <><Cart /></>
  },
  {
    path: "/favorites",
    element: <><Products /></>
  }, {
    path: '/signin',
    element: <><SignIn /></>
  }, {
    path: '/signup', element: <><SignUp /></>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
