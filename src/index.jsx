import React from 'react';
import ReactDOM from 'react-dom/client';
import './_assets/index.css';
import Home from './features/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
