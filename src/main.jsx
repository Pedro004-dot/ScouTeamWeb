import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  RouterProvider,
} from "react-router-dom";
import {router} from "./Routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} >
     <RouterProvider router={router} />
     <ToastContainer />
  </Provider>
    
  </React.StrictMode>,
)
