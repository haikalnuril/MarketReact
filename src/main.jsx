import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductPage from './Pages/products.jsx'
import ProfilePage from './Pages/profile.jsx'
import DetailProductPage from './Pages/detailProduct.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import DarkModeContextProvider from './context/DarkMode'
import {TotalPriceProvider} from './context/TotalPriceContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/products",
    element: <ProductPage/>,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router= {router}/>
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
