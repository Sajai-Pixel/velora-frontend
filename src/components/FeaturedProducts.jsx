import { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ShopContext } from '../context/ShopContext'

const FeaturedProducts = () => {
    const { products } = useContext(ShopContext)
    const [featured, setFeatured] = useState([])
    useEffect(() => {
        setFeatured(products.slice(0, 8))
    }, [products])

    return (
        <section className="py-32 px-auto">
            <h2 className="text-4xl tracking-tighter text-center font-medium">
                Featured Products
            </h2>

            <p className="text-black/50 text-center text-base max-w-md mx-auto mt-4 mb-8">
                Discover premium products at unbeatable prices curated for quality,
                comfort and style.
            </p>

            <div className="mx-auto grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {featured.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <div className="flex items-center justify-center pt-12"><a href="/products" class="px-6 py-2.5 text-white bg-black rounded-lg hover:bg-black/80 transition-colors">View All Products</a></div>
        </section>
    )
}

export default FeaturedProducts