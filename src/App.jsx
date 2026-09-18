import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes, Outlet } from 'react-router-dom'
import ProductDetailpage from './pages/ProductDetailpage'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Login from './components/Login'
import Signup from './components/Signup'
import ErrorPage from './pages/ErrorPage'
import { Toaster } from 'react-hot-toast';
import Profile from './pages/account/Profile'
import AccountLayout from './layout/AccountLayout'
import Orders from './pages/account/Orders'
import Addresses from './pages/account/Addresses'
import Settings from './pages/account/Settings'
import Wishlist from './pages/Wishlist'
import AdminLayout from './layout/AdminLayout'
import Add from './admin/components/Add'
import List from './admin/components/List'
import AdminLogin from './admin/components/AdminLogin'
import ProtectedRoute from './admin/components/ProtectedRoute'
import AdminDashboard from './admin/components/AdminDashboard'
import Customers from './admin/components/Customers'
import AdminOrders from './admin/components/Orders'
import Checkout from './pages/Checkout'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Pages with Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<ProductDetailpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>

        <Route element={<AccountLayout />}>
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/orders" element={<Orders />} />
          <Route path="/account/addresses" element={<Addresses />} />
          <Route path="/account/settings" element={<Settings />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="add" element={<Add />} />
            <Route path="edit/:id" element={<Add />} />
            <Route path="list" element={<List />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Route>

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
export default App