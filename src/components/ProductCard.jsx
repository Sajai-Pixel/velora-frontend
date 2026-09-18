import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, addToWishlist, removeFromWishlist } from '../redux/cartSlice'
import toast from 'react-hot-toast'

const ProductCard = ({ product }) => {
  const thumbnail = product?.images?.[0]
  const discount = Number(product?.discountPercentage || 0)
  const price = Number(product?.price || 0)
  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price
  const rating = Number(product?.rating || 0)
  const reviewCount = product?.reviews?.length || 0

  const dispatch = useDispatch()

  const handleAdd = () => {
    try {
      dispatch(
        addToCart({
          ...product,
          size: product.sizes?.[0]
        })
      )
      toast.success(`${product.title} added to cart`)
    } catch (error) {
      toast.error(error || 'Failed')
    }
  }

  const wishlist = useSelector(state => state.cart.wishlist)

  const isWishlisted = wishlist.some(
    item => item._id === product._id
  )

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product._id))
      toast.success(`${product.title} removed from wishlist`)
    } else {
      dispatch(addToWishlist(product))
      toast.success(`${product.title} added to wishlist`)
    }
  }

  return (
    <div className="group w-full min-w-0">

      {/* Product Image */}
      <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-black/5">

        <Link
          to={`/products/${product._id}`}
          aria-label={`View ${product.title}`}
          className="block w-full h-full"
        >
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={product.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm text-black/40">
              No Image
            </div>
          )}
        </Link>

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-medium text-white">
            {Math.round(discount)}% OFF
          </span>
        )}

        {/* Wishlist / Cart */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">

          <button
            type="button"
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-200 hover:scale-110 active:scale-90"
            onClick={handleWishlist}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={isWishlisted ? 'red' : 'none'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                  C13.09 3.81 14.76 3 16.5 3
                  C19.58 3 22 5.42 22 8.5
                  c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke={isWishlisted ? 'red' : 'black'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            title="Add to cart"
            onClick={handleAdd}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-200 hover:scale-110 active:scale-90"
          >
            <img
              src="/src/assets/cart.svg"
              alt="Add to cart"
              className="h-3.5 w-3.5"
            />
          </button>

        </div>

        {/* Stock */}
        {product.stock <= 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black">
              Out of Stock
            </span>
          </div>
        )}

      </div>

      {/* Product Details */}
      <div className="mt-4">

        <Link
          to={`/products/${product._id}`}
          className="block"
        >
          <h4 className="truncate text-sm font-medium text-black/70 transition-colors group-hover:text-black">
            {product.title}
          </h4>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">

          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= Math.round(rating)
                    ? 'text-yellow-400 text-sm'
                    : 'text-black/15 text-sm'
                }
              >
                ★
              </span>
            ))}
          </div>

          <span className="text-xs text-black/40">
            {rating > 0 ? rating.toFixed(1) : 'No rating'}
            {reviewCount > 0 && ` (${reviewCount})`}
          </span>

        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">

          <span className="text-base font-semibold text-black">
            ₹{discountedPrice.toFixed(2)}
          </span>

          {discount > 0 && (
            <span className="text-sm text-black/40 line-through">
              ₹{price.toFixed(2)}
            </span>
          )}

        </div>

        {/* Stock Text */}
        {product.stock > 0 && product.stock <= 10 && (
          <p className="mt-1 text-xs text-orange-500">
            Only {product.stock} left
          </p>
        )}

      </div>

    </div>
  )
}

export default ProductCard