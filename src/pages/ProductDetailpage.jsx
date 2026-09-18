import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../api/productApi'
import {
    addToCart,
    addToWishlist,
    removeFromWishlist
} from '../redux/cartSlice'
import toast from 'react-hot-toast'
const ProductDetailpage = () => {
    const { id } = useParams()
    // Product states
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState('')
    const [error, setError] = useState('')
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    // Redux
    const dispatch = useDispatch()
    const wishlist = useSelector(
        state => state.cart.wishlist
    )
    // Check whether product is already in wishlist
    const isWishlisted = wishlist.some(
        item => item._id === product?._id
    )
    // Wishlist
    const handleWishlist = () => {
        if (isWishlisted) {
            dispatch(removeFromWishlist(product._id))
            toast.success('Removed from wishlist')
        } else {
            dispatch(addToWishlist(product))
            toast.success('Added to wishlist')
        }
    }
    // Add to cart
    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error('Please select a size')
            return
        }
        dispatch(
            addToCart({
                ...product,
                size: selectedSize,
                quantity: quantity
            })
        )
        toast.success(
            `${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart`
        )
    }
    // Fetch product
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id)
                setProduct(data)
            } catch (error) {
                setError(
                    error.response?.data?.message ||
                    'Failed to load product'
                )
            }
        }
        fetchProduct()
    }, [id])
    // Quantity
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }
    const decreaseQuantity = () => {
        setQuantity(prev => Math.max(1, prev - 1))
    }
    // Error
    if (error) {
        return (
            <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
                <p className="text-red-500 text-sm sm:text-base">
                    {error}
                </p>
            </section>
        )
    }
    // Loading
    if (!product) {
        return (
            <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
                <p className="text-sm sm:text-base">
                    Loading...
                </p>
            </section>
        )
    }
    return (
        <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
                {/* Product Images */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/5">
                        <Swiper
                            modules={[Navigation, Thumbs]}
                            navigation
                            thumbs={{
                                swiper:
                                    thumbsSwiper &&
                                        !thumbsSwiper.destroyed
                                        ? thumbsSwiper
                                        : null
                            }}
                            className="aspect-square w-full"
                        >
                            {product.images?.map(
                                (image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex h-full w-full items-center justify-center">
                                            <img
                                                src={image}
                                                alt={`${product.title} - ${index + 1}`}
                                                width="540"
                                                height="540"
                                                className="h-full w-full object-cover object-top"
                                            />
                                        </div>
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                    {/* Thumbnail Slider */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        modules={[Thumbs]}
                        watchSlidesProgress
                        spaceBetween={8}
                        slidesPerView={4}
                        className="w-full"
                        breakpoints={{
                            480: {
                                slidesPerView: 5,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 5,
                                spaceBetween: 12
                            }
                        }}
                    >
                        {product.images?.map(
                            (image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="aspect-square cursor-pointer overflow-hidden rounded-md sm:rounded-lg bg-black/5">
                                        <img
                                            src={image}
                                            alt={`${product.title} thumbnail ${index + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </div>
                {/* Product Details */}
                <div className="flex flex-col min-w-0 relative">

                    <button
                        type="button"
                        className="shrink-0 absolute right-0 top-0 p-3 border border-black/10 rounded-lg hover:bg-black/5 transition-colors"
                        title={
                            isWishlisted
                                ? 'Remove from wishlist'
                                : 'Add to wishlist'
                        }
                        onClick={handleWishlist}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill={
                                isWishlisted
                                    ? 'red'
                                    : 'none'
                            }
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                                        C13.09 3.81 14.76 3 16.5 3
                                        C19.58 3 22 5.42 22 8.5
                                        c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                stroke={
                                    isWishlisted
                                        ? 'red'
                                        : 'black'
                                }
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                        {product.title}
                    </h1>
                    {/* SKU */}
                    <div className="flex items-center gap-2 flex-wrap mt-2">
                        <span className="text-xs sm:text-sm text-red-500 font-medium">
                            {product.sku}
                        </span>
                    </div>
                    {/* Price */}
                    <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5 flex-wrap">
                        <span className="text-2xl sm:text-3xl font-bold">
                            ${product.price.toFixed(2)}
                        </span>
                        <span className="line-through text-black/40 text-sm sm:text-lg">
                            $
                            {(
                                product.price /
                                (
                                    1 -
                                    product.discountPercentage /
                                    100
                                )
                            ).toFixed(2)}
                        </span>
                        <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                            {Math.round(
                                product.discountPercentage
                            )}% OFF
                        </span>
                    </div>
                    {/* Size */}
                    {product.sizes?.length > 0 && (
                        <div className="mt-5 sm:mt-6">
                            <p className="text-sm font-medium mb-2">
                                Select Size
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                {product.sizes.map(
                                    (size, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() =>
                                                setSelectedSize(size)
                                            }
                                            className={`
                                                text-sm sm:text-base
                                                px-3 sm:px-4
                                                py-1.5 sm:py-2
                                                rounded-lg
                                                border
                                                cursor-pointer
                                                transition-colors
                                                ${selectedSize === size
                                                    ? 'bg-black text-white border-black'
                                                    : 'bg-black/5 text-black border-transparent hover:bg-black/10'
                                                }
                                            `}
                                        >
                                            {size}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                    {/* Description */}
                    <p className="mt-5 sm:mt-6 text-black/60 text-sm leading-6 sm:leading-7">
                        {product.description}
                    </p>
                    {/* Tags */}
                    {product.tags?.length > 0 && (
                        <div className="flex gap-2 mt-4 sm:mt-5 flex-wrap">
                            {product.tags.map(
                                (tag, index) => (
                                    <span
                                        key={index}
                                        className="text-[11px] sm:text-xs bg-black/5 text-black/60 px-2.5 sm:px-3 py-1 rounded-full capitalize"
                                    >
                                        #{tag}
                                    </span>
                                )
                            )}
                        </div>
                    )}
                    <hr className="my-6 sm:my-7 border-black/10" />
                    {/* Quantity + Cart */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        {/* Quantity */}
                        <div className="flex shrink-0 items-center border border-black/10 rounded-lg overflow-hidden w-full sm:w-fit justify-between sm:justify-start">
                            <button
                                type="button"
                                aria-label="Decrease quantity"
                                onClick={decreaseQuantity}
                                disabled={quantity === 1}
                                className="p-3 sm:p-2.5 hover:bg-black/5 transition-colors disabled:opacity-30"
                            >
                                −
                            </button>
                            <span className="px-4 text-sm font-medium select-none min-w-10 text-center">
                                {quantity}
                            </span>
                            <button
                                type="button"
                                aria-label="Increase quantity"
                                onClick={increaseQuantity}
                                className="p-3 sm:p-2.5 hover:bg-black/5 transition-colors"
                            >
                                +
                            </button>
                        </div>
                        {/* Cart */}
                        <div className="flex gap-3 w-full">
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium text-sm sm:text-base"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    {/* Buy Now */}
                    <Link
                        to="/cart"
                        className="mt-3 w-full text-center py-3 border border-black/10 rounded-lg hover:bg-black/5 transition-colors font-medium text-sm sm:text-base"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default ProductDetailpage