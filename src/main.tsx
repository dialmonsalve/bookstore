import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from './router/RouterApp';
import { store } from './store';

import './App.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store } >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
