import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import './index.css'
import { ConfigProvider } from 'antd';
import { Login } from './pages';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#dd4900",
        }
      }}
    >
      <Login />
    </ConfigProvider>
  </React.StrictMode>,
)
