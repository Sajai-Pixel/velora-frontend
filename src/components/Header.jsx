import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/velora.png'
import { useSelector } from 'react-redux'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'))

  const wishlist = useSelector((state) => state.cart.wishlist)
  const cartItems = useSelector((state) => state.cart.items)

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/5">

      {/* Main Header */}
      <div className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-10">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="Velora"
            loading="lazy"
            className="w-auto h-12 sm:h-14 md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="hover:opacity-70 transition-opacity"
            to="/"
          >
            Home
          </Link>

          <Link
            className="hover:opacity-70 transition-opacity"
            to="/products"
          >
            Shop
          </Link>

          <Link
            className="hover:opacity-70 transition-opacity"
            to="/#categories"
          >
            Categories
          </Link>

          <Link
            className="hover:opacity-70 transition-opacity"
            to="/products"
          >
            Deals
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7">

          {/* Wishlist */}
          <Link
            className="relative text-black/70 hover:text-black transition-colors"
            to="/wishlist"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 min-w-4 h-4 px-1 bg-red-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            className="relative text-black/70 hover:text-black transition-colors"
            to="/cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
              <path d="M8 11V6a4 4 0 0 1 8 0v5" />
            </svg>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 min-w-4 h-4 px-1 bg-red-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Desktop Login / Dashboard */}
          {!user ? (
            <Link
              className="hidden md:block hover:opacity-70 transition-opacity"
              to="/auth/login"
            >
              Login
            </Link>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </div>
          )}

          {/* Desktop Dashboard */}
          {user && (
            <Link
              className="hidden md:block px-5 py-2.5 text-white bg-black rounded-lg hover:bg-black/80 transition-colors"
              to="/account/profile"
            >
              Dashboard
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/5 bg-white px-4 py-4">

          <div className="flex flex-col">

            <Link
              to="/"
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg hover:bg-black/5 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg hover:bg-black/5 transition-colors"
            >
              Shop
            </Link>

            <Link
              to="/#categories"
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg hover:bg-black/5 transition-colors"
            >
              Categories
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="px-4 py-3 rounded-lg hover:bg-black/5 transition-colors"
            >
              Deals
            </Link>

            <div className="my-2 border-t border-black/10" />

            {!user ? (
              <Link
                to="/auth/login"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                Login
              </Link>
            ) : (
              <Link
                to="/account/profile"
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <span>Dashboard</span>
              </Link>
            )}

          </div>
        </div>
      )}

    </nav>
  )
}

export default Header