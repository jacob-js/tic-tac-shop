import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import './index.css'
import { ConfigProvider } from 'antd';
import { Login, Signup } from './pages';

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
      {/* <Login /> */}
      <Signup />
    </ConfigProvider>
  </React.StrictMode>,
)
