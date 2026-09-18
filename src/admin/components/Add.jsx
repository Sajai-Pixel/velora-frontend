import React, { useState, useEffect } from 'react'
import { createProduct, getProductById, updateProduct } from '../../api/productApi'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
const Add = () => {
    const { id } = useParams()
    useEffect(() => {
        if (!id) return
        const fetchProduct = async () => {
            try {
                const response = await getProductById(id)
                const product = response.product || response
                setFormData({
                    title: product.title || '',
                    description: product.description || '',
                    category: product.category || '',
                    stock: product.stock || 0,
                    price: product.price || '',
                    discountPercentage: product.discountPercentage || '',
                    tags: product.tags?.join(', ') || '',
                    brand: product.brand || '',
                    sku: product.sku || '',
                    sizes: product.sizes?.join(', ') || ''
                })
                setExistingImages(product.images || [])
            } catch (error) {
                console.error(error)
                toast.error(
                    error.response?.data?.message ||
                    'Failed to load product'
                )
            }
        }
        fetchProduct()
    }, [id])
    const [images, setImages] = useState([])
    const [existingImages, setExistingImages] = useState([])
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        stock: 0,
        price: '',
        discountPercentage: '',
        tags: '',
        brand: '',
        sku: '',
        sizes: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // Check images
        if (!id && images.length === 0) {
            toast.error('Please upload at least one image')
            return
        }
        if (images.length > 4) {
            toast.error('You can upload maximum 4 images')
            return
        }
        const data = new FormData()
        data.append('title', formData.title)
        data.append('description', formData.description)
        data.append('category', formData.category)
        data.append('stock', formData.stock)
        data.append('price', formData.price)
        data.append('discountPercentage', formData.discountPercentage)
        data.append('brand', formData.brand)
        data.append('sku', formData.sku)
        // Tags
        formData.tags
            .split(',')
            .map(tag => tag.trim())
            .filter(Boolean)
            .forEach(tag => {
                data.append('tags', tag)
            })
        // Sizes
        formData.sizes
            .split(',')
            .map(size => size.trim())
            .filter(Boolean)
            .forEach(size => {
                data.append('sizes', size)
            })
        // Images
        images.forEach((image) => {
            data.append('images', image)
        })
        try {
            let response
            if (id) {
                response = await updateProduct(id, data)
            } else {
                response = await createProduct(data)
            }
            toast.success(response.message)
            setFormData({
                title: '',
                description: '',
                category: '',
                stock: 0,
                price: '',
                discountPercentage: '',
                tags: '',
                brand: '',
                sku: '',
                sizes: ''
            })
            setImages([])
        } catch (error) {
            console.error(error)
            toast.error(
                error.response?.data?.message ||
                'Failed to create product'
            )
        }
    }
    return (
        <div className="max-w-4xl">
            <div className="mb-6">
                <h1 className="text-2xl font-semibold">
                    Add Product
                </h1>
                <p className="mt-1 text-sm text-black/50">
                    Add a new product to your store
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="bg-white border border-black/10 rounded-xl p-6 space-y-6"
            >
                {/* Basic Information */}
                <div>
                    <h2 className="text-lg font-medium mb-4">
                        Basic Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Title */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2">
                                Product Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter product title"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                        </div>
                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Enter product description"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black resize-none"
                            />
                        </div>
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Example: Girls Dresses"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                        </div>
                        {/* Brand */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Brand
                            </label>
                            <input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                placeholder="Enter brand"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                        </div>
                    </div>
                </div>
                {/* Pricing & Stock */}
                <div className="border-t border-black/10 pt-6">
                    <h2 className="text-lg font-medium mb-4">
                        Pricing & Stock
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="0"
                                required
                                min="0"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                        </div>
                        {/* Discount */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Discount %
                            </label>
                            <input
                                type="number"
                                name="discountPercentage"
                                value={formData.discountPercentage}
                                onChange={handleChange}
                                placeholder="0"
                                min="0"
                                max="100"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                        </div>
                        {/* Stock */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Stock
                            </label>
                            <input
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                min="0"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                        </div>
                    </div>
                </div>
                {/* Product Details */}
                <div className="border-t border-black/10 pt-6">
                    <h2 className="text-lg font-medium mb-4">
                        Product Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* SKU */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                SKU
                            </label>
                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                placeholder="Example: VLR-GD-001"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                        </div>
                        {/* Sizes */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Sizes
                            </label>
                            <input
                                type="text"
                                name="sizes"
                                value={formData.sizes}
                                onChange={handleChange}
                                placeholder="2-3Y, 4-5Y, 6-7Y"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                        </div>
                        {/* Tags */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2">
                                Tags
                            </label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="fashion, summer, girls dress"
                                className="w-full px-4 py-3 rounded-lg border border-black/10 outline-none focus:border-black"
                            />
                            <p className="mt-1 text-xs text-black/40">
                                Separate tags with commas
                            </p>
                        </div>
                        {/* Images */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-3">
                                Upload Images
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <label
                                        key={index}
                                        className="h-28 border border-dashed border-black/10 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 transition-colors overflow-hidden"
                                    >
                                        {images[index] ? (

                                            <img
                                                src={URL.createObjectURL(images[index])}
                                                alt={`Product ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />

                                        ) : existingImages[index] ? (

                                            <img
                                                src={existingImages[index]}
                                                alt={`Product ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />

                                        ) : (
                                            <>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    className="text-black/30"
                                                >
                                                    <path d="M12 16V4" />
                                                    <path d="m8 8 4-4 4 4" />
                                                    <path d="M4 16.5v1.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5" />
                                                </svg>
                                                <span className="mt-1 text-xs text-black/50">
                                                    Upload
                                                </span>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0]
                                                if (!file) return
                                                setImages((prev) => {
                                                    if (prev.length >= 4) {
                                                        toast.error('Maximum 4 images allowed')
                                                        return prev
                                                    }
                                                    return [...prev, file]
                                                })
                                            }}
                                        />
                                    </label>
                                ))}
                            </div>
                            <p className="mt-2 text-xs text-black/40">
                                Upload 1 to 4 images
                            </p>
                        </div>
                    </div>
                </div>
                {/* Submit */}
                <div className="border-t border-black/10 pt-6 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Add