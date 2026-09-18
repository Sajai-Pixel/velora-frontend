import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Wishlist = () => {
    const wishlistProducts = useSelector(state => state.cart.wishlist)
    return (
        <section className="px-auto md:px-12 py-12 min-h-screen bg-neutral-50">
            {/* Header */}
            <div className="mt-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                        My Wishlist
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="mt-10 flex gap-10">
                <div className="mx-auto grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {wishlistProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Wishlist
