import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import './index.css'
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#dd4900",
          colorLink: "#8d8d8d",
          colorLinkHover: "#dd4900"
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
