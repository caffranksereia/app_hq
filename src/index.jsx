import React from 'react';
import ReactDOM from 'react-dom/client';
import './_assets/index.css';
import Home from './features/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page404 from './features/product/pages/Page404/NotFound';
import ShoppingCard from './features/product/pages/ShoppingCard';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
  {
    path: '/shoppingCart',
    element: <ShoppingCard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
);
