import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ShopContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ShopContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
)
