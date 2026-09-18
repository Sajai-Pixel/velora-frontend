import React, { useEffect, useState } from 'react'
import { deleteProduct, getAllProducts } from '../../api/productApi'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const List = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchProducts = async () => {
        try {
            const response = await getAllProducts()
            setProducts(response || [])

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const handleDelete = async (id) => {
        try {
            const response = await deleteProduct(id)

            toast.success(response.message)

            setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== id)
            )

        } catch (error) {
            console.error(error)

            toast.error(
                error.response?.data?.message || 'Failed to delete product'
            )
        }
    }
    if (loading) {
        return (
            <div className="py-10 text-center text-black/50">
                Loading products...
            </div>
        )
    }
    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Products
                    </h1>
                    <p className="mt-1 text-sm text-black/50">
                        Manage your store products
                    </p>
                </div>
                <span className="text-sm text-black/50">
                    {products.length} products
                </span>
            </div>
            {/* Product List */}
            <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-black/5 border-b border-black/10">
                            <tr>
                                <th className="text-left px-5 py-4 font-medium">
                                    Product
                                </th>
                                <th className="text-left px-5 py-4 font-medium">
                                    Category
                                </th>
                                <th className="text-left px-5 py-4 font-medium">
                                    Price
                                </th>
                                <th className="text-left px-5 py-4 font-medium">
                                    Stock
                                </th>
                                <th className="text-right px-5 py-4 font-medium">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr
                                    key={product._id}
                                    className="border-b border-black/10 last:border-0 hover:bg-black/[0.02]"
                                >
                                    {/* Product */}
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.images?.[0]}
                                                alt={product.title}
                                                className="w-12 h-12 rounded-lg object-cover bg-black/5"
                                            />
                                            <div>
                                                <p className="font-medium">
                                                    {product.title}
                                                </p>
                                                <p className="text-xs text-black/40 mt-1">
                                                    {product.sku}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    {/* Category */}
                                    <td className="px-5 py-4 text-black/60">
                                        {product.category || '-'}
                                    </td>
                                    {/* Price */}
                                    <td className="px-5 py-4 font-medium">
                                        ₹{product.price}
                                    </td>
                                    {/* Stock */}
                                    <td className="px-5 py-4">
                                        <span
                                            className={
                                                product.stock > 0
                                                    ? 'text-green-600'
                                                    : 'text-red-500'
                                            }
                                        >
                                            {product.stock}
                                        </span>
                                    </td>
                                    {/* Actions */}
                                    <td className="px-5 py-4">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                to={`/admin/edit/${product._id}`}
                                                className="px-3 py-1.5 rounded-lg border border-black/10 hover:bg-black/5 transition-colors"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="px-3 py-1.5 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                                                onClick={() => handleDelete(product._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Empty */}
                {products.length === 0 && (
                    <div className="py-12 text-center text-black/50">
                        No products found
                    </div>
                )}
            </div>
        </div>
    )
}
export default List