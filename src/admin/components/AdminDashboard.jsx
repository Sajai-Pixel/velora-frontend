import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/productApi'
import { getAllUsers } from '../../api/authApi';

const AdminDashboard = () => {
    const [productCount, setProductCount] = useState(0);
    const [userCount, setUserCount] = useState(0)

    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts();
            const productCount = products.length;
            setProductCount(productCount)
        };
        getProducts();
    }, []);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const users = await getAllUsers()
                setUserCount(users.length)
            } catch (err) {
                console.error('Failed to load users:', err)
                // optionally: redirect to login if 401/403
            }
        }
        getUsers()
    }, [])

    const [orders, setOrders] = useState([
        {
            id: '#ORD-1001',
            date: '17 Sep 2026',

            customer: {
                name: 'Arjun Menon',
                email: 'arjun@example.com',
                phone: '+91 98765 43210'
            },

            shippingAddress: {
                name: 'Arjun Menon',
                address: '12 MG Road, Near City Hospital',
                city: 'Thrissur',
                state: 'Kerala',
                pincode: '680001',
                phone: '+91 98765 43210'
            },

            products: [
                {
                    id: 1,
                    name: 'Classic Oversized T-Shirt',
                    image: 'https://dummyimage.com/100x100/e5e5e5/555',
                    size: 'XL',
                    quantity: 2,
                    price: 899
                },
                {
                    id: 2,
                    name: 'Premium Hoodie',
                    image: 'https://dummyimage.com/100x100/e5e5e5/555',
                    size: 'M',
                    quantity: 1,
                    price: 1499
                }
            ],

            subtotal: 3297,
            deliveryCharge: 100,
            discount: 200,
            totalAmount: 3197,

            paymentMethod: 'COD',
            paymentStatus: 'Unpaid',

            deliveryStatus: 'Processing',

            trackingNumber: '',
            courier: ''
        },

        {
            id: '#ORD-1002',
            date: '16 Sep 2026',

            customer: {
                name: 'Rahul Kumar',
                email: 'rahul@example.com',
                phone: '+91 91234 56789'
            },

            shippingAddress: {
                name: 'Rahul Kumar',
                address: '45 Palace Road',
                city: 'Ernakulam',
                state: 'Kerala',
                pincode: '682011',
                phone: '+91 91234 56789'
            },

            products: [
                {
                    id: 3,
                    name: 'Premium Cotton Shirt',
                    image: 'https://dummyimage.com/100x100/e5e5e5/555',
                    size: 'L',
                    quantity: 1,
                    price: 1299
                }
            ],

            subtotal: 1299,
            deliveryCharge: 80,
            discount: 0,
            totalAmount: 1379,

            paymentMethod: 'Online',
            paymentStatus: 'Paid',

            deliveryStatus: 'Shipped',

            trackingNumber: 'TRK123456',
            courier: 'Delhivery'
        },

        {
            id: '#ORD-1003',
            date: '15 Sep 2026',

            customer: {
                name: 'Anjali Nair',
                email: 'anjali@example.com',
                phone: '+91 99887 66554'
            },

            shippingAddress: {
                name: 'Anjali Nair',
                address: '8 Beach Road',
                city: 'Kozhikode',
                state: 'Kerala',
                pincode: '673001',
                phone: '+91 99887 66554'
            },

            products: [
                {
                    id: 4,
                    name: 'Linen Casual Dress',
                    image: 'https://dummyimage.com/100x100/e5e5e5/555',
                    size: 'M',
                    quantity: 1,
                    price: 1899
                },
                {
                    id: 5,
                    name: 'Classic Handbag',
                    image: 'https://dummyimage.com/100x100/e5e5e5/555',
                    size: 'Free Size',
                    quantity: 1,
                    price: 999
                }
            ],

            subtotal: 2898,
            deliveryCharge: 100,
            discount: 300,
            totalAmount: 2698,

            paymentMethod: 'COD',
            paymentStatus: 'Paid',

            deliveryStatus: 'Delivered',

            trackingNumber: 'TRK987654',
            courier: 'Blue Dart'
        }
    ])

    const paidOrders = orders.filter((order) => order.paymentStatus === 'Paid')
    const totalrevenue = paidOrders.reduce((sum, order) => sum += order.totalAmount,0)
    

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Admin Dashboard
            </h1>
            <p className="mt-2 text-gray-500">
                Welcome to the admin dashboard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                {/* Products */}
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-blue-600 font-medium">
                                Products
                            </p>
                            <h3 className="text-3xl font-bold mt-2">
                                {productCount}
                            </h3>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center">
                            <i className="fa-solid fa-box text-xl"></i>
                        </div>
                    </div>
                </div>
                {/* Orders */}
                <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-green-600 font-medium">
                                Orders
                            </p>
                            <h3 className="text-3xl font-bold mt-2">
                                {orders.length}
                            </h3>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center">
                            <i className="fa-solid fa-cart-shopping text-xl"></i>
                        </div>
                    </div>
                </div>
                {/* Customers */}
                <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-purple-600 font-medium">
                                Customers
                            </p>
                            <h3 className="text-3xl font-bold mt-2">
                                {userCount}
                            </h3>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center">
                            <i className="fa-solid fa-users text-xl"></i>
                        </div>
                    </div>
                </div>
                {/* Revenue */}
                <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-orange-600 font-medium">
                                Revenue
                            </p>
                            <h3 className="text-3xl font-bold mt-2">
                                ₹{totalrevenue}k
                            </h3>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                            <i className="fa-solid fa-indian-rupee-sign text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard