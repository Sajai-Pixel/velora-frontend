import React, { useState, useEffect, useContext, useRef } from 'react'
import ProductCard from '../components/ProductCard'
import { ShopContext } from '../context/ShopContext'

const Shop = () => {
    const { products } = useContext(ShopContext)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('featured')
    const [category, setCategory] = useState('all')
    const [maxPrice, setMaxPrice] = useState(0)
    const userEditedPrice = useRef(false)
    const [selectedBrands, setSelectedBrands] = useState([])
    const brands = [...new Set(products.map(product => product.brand).filter(Boolean))]
    const highPrice = products.length
        ? Math.max(...products.map(product => product.price))
        : 0

    // Keep the price ceiling in sync once products actually load,
    // but stop overriding it once the user has touched the slider.
    useEffect(() => {
        if (!userEditedPrice.current && highPrice > 0) {
            setMaxPrice(highPrice)
        }
    }, [highPrice])

    const handleMaxPriceChange = (value) => {
        userEditedPrice.current = true
        setMaxPrice(value)
    }

    const categories = [
        'all',
        ...new Set(products.map(product => product.category))
    ]

    const filteredProducts = products
        .filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter(product =>
            category === 'all' || product.category === category
        )
        .filter(product =>
            product.price <= maxPrice
        )
        .filter(product =>
            selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand)
        )
        .sort((a, b) => {
            if (sort === 'price-asc') return a.price - b.price
            if (sort === 'price-desc') return b.price - a.price
            if (sort === 'rating') return b.rating - a.rating
            if (sort === 'newest') return b.id - a.id
            return 0
        })

    const hasActiveFilters = search || category !== 'all' || (highPrice > 0 && maxPrice < highPrice)

    const clearFilters = () => {
        setSearch('')
        setCategory('all')
        userEditedPrice.current = false
        setMaxPrice(highPrice)
    }

    return (
        <section className="px-auto md:px-12 py-12 min-h-screen bg-neutral-50">
            {/* Header */}
            <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                        All Products
                    </h1>
                    <p className="text-black/50 mt-2 text-base">
                        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                    </p>
                </div>

                {/* Search + Sort */}
                <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2 border border-black/10 focus-within:border-black/30 transition-colors rounded-lg px-3 h-10.5 w-72 bg-white shadow-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0 text-black/40"
                            aria-hidden="true"
                        >
                            <path d="m21 21-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </svg>
                        <input
                            placeholder="Search products..."
                            className="flex-1 outline-none text-sm h-full placeholder:text-black/40 bg-transparent"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="text-black/30 hover:text-black/60 transition-colors"
                                aria-label="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <label className="relative flex items-center gap-2 border border-black/10 rounded-lg px-3 py-2.5 bg-white cursor-pointer shadow-sm hover:border-black/20 transition-colors">
                        <select
                            className="outline-none text-sm pr-4 bg-transparent cursor-pointer"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                            <option value="newest">Newest</option>
                        </select>
                    </label>

                    <button className="flex items-center gap-2 border border-black/15 rounded-lg px-3 py-2.5 text-sm md:hidden bg-white shadow-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M10 5H3" />
                            <path d="M12 19H3" />
                            <path d="M14 3v4" />
                            <path d="M16 17v4" />
                            <path d="M21 12h-9" />
                            <path d="M21 19h-5" />
                            <path d="M21 5h-7" />
                            <path d="M8 10v4" />
                            <path d="M8 12H3" />
                        </svg>
                        Filters
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="mt-10 flex gap-10">
                {/* Sidebar */}
                <aside className="w-56 shrink-0 hidden md:block">
                    <div className="flex flex-col gap-8 bg-white rounded-xl border border-black/10 p-5 shadow-sm">
                        {/* Categories */}
                        <div>
                            <h3 className="text-xs uppercase font-semibold text-black/50 tracking-widest mb-4">
                                Category
                            </h3>
                            <ul className="flex flex-col gap-1.5">
                                {categories.map((item) => {
                                    const count =
                                        item === 'all'
                                            ? products.length
                                            : products.filter(
                                                product => product.category === item
                                            ).length
                                    return (
                                        <li key={item}>
                                            <button
                                                onClick={() => setCategory(item)}
                                                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${category === item
                                                    ? 'bg-black text-white'
                                                    : 'hover:bg-black/5'
                                                    }`}
                                            >
                                                <span className="capitalize">
                                                    {item === 'all' ? 'All Products' : item}
                                                </span>
                                                <span
                                                    className={
                                                        category === item
                                                            ? 'text-xs text-white/60'
                                                            : 'text-xs text-black/40'
                                                    }
                                                >
                                                    {count}
                                                </span>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase font-semibold text-black/50 tracking-widest mb-4">
                                Brands
                            </h3>
                            <div className="flex flex-col gap-1.5">
                                {brands.map(brand => (
                                    <div key={brand} className="flex gap-1">
                                        <input
                                            type="checkbox"
                                            id={brand}
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => {
                                                setSelectedBrands(prev =>
                                                    prev.includes(brand)
                                                        ? prev.filter(item => item !== brand)
                                                        : [...prev, brand]
                                                )
                                            }}
                                        />

                                        <label htmlFor={brand}>
                                            {brand}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Max Price */}
                        <div>
                            <h3 className="text-xs uppercase font-semibold text-black/50 tracking-widest mb-4">
                                Max Price
                            </h3>
                            <div className="flex items-center justify-between text-sm mb-2">
                                <span className="text-black/40">$0</span>
                                <span className="font-medium">${maxPrice}</span>
                            </div>
                            <input
                                min="0"
                                max={highPrice || 3000}
                                step="1"
                                className="w-full accent-black"
                                type="range"
                                value={maxPrice}
                                onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
                            />
                        </div>

                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="text-sm text-black/50 hover:text-black underline underline-offset-2 transition-colors text-left"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>
                </aside>

                {/* Products */}
                <div className="flex-1">
                    {filteredProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-24 text-black/50 gap-3">
                            <span className="text-base">No products found</span>
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="text-sm underline underline-offset-2 hover:text-black transition-colors"
                                >
                                    Clear filters and try again
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="mx-auto grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Shop