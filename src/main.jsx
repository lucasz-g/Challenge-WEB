{/*
https://www.canva.com/design/DAGBGAsbdlg/yoopG0AXx7drXLQJNgEt_w/edit?utm_content=DAGBGAsbdlg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
*/}

import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';


const router = createBrowserRouter([
  {
    path:"/", element: <App/>,

    children:[
      {path:'/', element:<Home/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
