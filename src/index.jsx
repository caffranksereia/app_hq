import React from 'react';
import ReactDOM from 'react-dom/client';
import './_assets/index.css';
import Home from './features/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page404 from './features/product/pages/Page404/NotFound';
import ShoppingCart from './features/product/pages/ShoppingCart';
import Profile from './features/product/pages/profile';
const routers = createBrowserRouter([
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
  {
    path: '/shoppingCart',
    element: <ShoppingCart />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
);
