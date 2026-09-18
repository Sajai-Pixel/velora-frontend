import React, { useState } from 'react'

const Orders = () => {

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


    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')


    const deliveryStatuses = [
        'Pending',
        'Processing',
        'Shipped',
        'Out for Delivery',
        'Delivered',
        'Cancelled'
    ]


    const updateOrder = (orderId, field, value) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === orderId
                    ? {
                        ...order,
                        [field]: value
                    }
                    : order
            )
        )
    }


    const filteredOrders = orders.filter((order) => {

        const searchValue = search.toLowerCase()

        const matchesSearch =
            order.id.toLowerCase().includes(searchValue) ||
            order.customer.name.toLowerCase().includes(searchValue) ||
            order.customer.email.toLowerCase().includes(searchValue) ||
            order.customer.phone.includes(searchValue)

        const matchesStatus =
            statusFilter === 'All' ||
            order.deliveryStatus === statusFilter

        return matchesSearch && matchesStatus
    })


    const getStatusStyle = (status) => {

        const styles = {
            Pending: 'bg-amber-50 text-amber-700',
            Processing: 'bg-blue-50 text-blue-700',
            Shipped: 'bg-violet-50 text-violet-700',
            'Out for Delivery': 'bg-orange-50 text-orange-700',
            Delivered: 'bg-emerald-50 text-emerald-700',
            Cancelled: 'bg-red-50 text-red-700'
        }

        return styles[status] || 'bg-black/5 text-black/60'
    }


    const codPending = orders
        .filter(
            (order) =>
                order.paymentMethod === 'COD' &&
                order.paymentStatus === 'Unpaid'
        )
        .reduce(
            (total, order) => total + order.totalAmount,
            0
        )


    return (
        <section className="space-y-6">

            {/* Header */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                <div>
                    <p className="text-sm font-medium text-black/40">
                        Order Management
                    </p>

                    <h1 className="mt-1 text-3xl font-semibold tracking-tight">
                        Orders
                    </h1>

                    <p className="mt-2 text-sm text-black/50">
                        Manage deliveries, payments and customer orders.
                    </p>
                </div>


                {/* Stats */}
                <div className="flex gap-3">

                    <div className="rounded-xl border border-black/10 bg-white px-5 py-3 shadow-sm">
                        <p className="text-xs font-medium uppercase tracking-wider text-black/40">
                            Orders
                        </p>

                        <p className="mt-1 text-2xl font-semibold">
                            {orders.length}
                        </p>
                    </div>

                    <div className="rounded-xl border border-black/10 bg-white px-5 py-3 shadow-sm">
                        <p className="text-xs font-medium uppercase tracking-wider text-black/40">
                            COD Pending
                        </p>

                        <p className="mt-1 text-2xl font-semibold">
                            ₹{codPending.toLocaleString('en-IN')}
                        </p>
                    </div>

                </div>

            </div>


            {/* Search & Filters */}
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div className="relative w-full lg:max-w-md">

                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black/30"></i>

                        <input
                            type="text"
                            placeholder="Search order, customer or phone..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl border border-black/10 bg-black/[0.02] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-black/30 focus:bg-white"
                        />

                    </div>


                    <div className="flex flex-wrap gap-2">

                        {[
                            'All',
                            'Pending',
                            'Processing',
                            'Shipped',
                            'Out for Delivery',
                            'Delivered',
                            'Cancelled'
                        ].map((status) => (

                            <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                                    statusFilter === status
                                        ? 'bg-black text-white'
                                        : 'bg-black/5 text-black/50 hover:bg-black/10'
                                }`}
                            >
                                {status}
                            </button>

                        ))}

                    </div>

                </div>

            </div>


            {/* Orders */}
            <div className="space-y-5">

                {filteredOrders.map((order) => (

                    <div
                        key={order.id}
                        className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
                    >

                        {/* Order Header */}
                        <div className="flex flex-col gap-4 border-b border-black/10 p-5 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-4">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
                                    <i className="fa-solid fa-box"></i>
                                </div>

                                <div>
                                    <h2 className="font-semibold">
                                        {order.id}
                                    </h2>

                                    <p className="mt-1 text-xs text-black/40">
                                        Ordered on {order.date}
                                    </p>
                                </div>

                            </div>


                            <span
                                className={`w-fit rounded-full px-3 py-1.5 text-xs font-medium ${getStatusStyle(order.deliveryStatus)}`}
                            >
                                {order.deliveryStatus}
                            </span>

                        </div>


                        <div className="p-5">

                            {/* Customer + Address */}
                            <div className="grid gap-6 lg:grid-cols-2">

                                {/* Customer */}
                                <div>

                                    <div className="mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-user text-xs text-black/40"></i>

                                        <h3 className="text-sm font-semibold">
                                            Customer
                                        </h3>
                                    </div>

                                    <div className="rounded-xl bg-black/[0.025] p-4">

                                        <p className="font-medium">
                                            {order.customer.name}
                                        </p>

                                        <p className="mt-1 text-sm text-black/50">
                                            {order.customer.email}
                                        </p>

                                        <p className="mt-1 text-sm text-black/50">
                                            {order.customer.phone}
                                        </p>

                                    </div>

                                </div>


                                {/* Address */}
                                <div>

                                    <div className="mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-location-dot text-xs text-black/40"></i>

                                        <h3 className="text-sm font-semibold">
                                            Delivery Address
                                        </h3>
                                    </div>

                                    <div className="rounded-xl bg-black/[0.025] p-4">

                                        <p className="font-medium">
                                            {order.shippingAddress.name}
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-black/50">
                                            {order.shippingAddress.address}
                                            <br />
                                            {order.shippingAddress.city},{' '}
                                            {order.shippingAddress.state}
                                            <br />
                                            PIN: {order.shippingAddress.pincode}
                                        </p>

                                        <p className="mt-1 text-sm text-black/50">
                                            {order.shippingAddress.phone}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Products */}
                            <div className="mt-7">

                                <div className="mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-bag-shopping text-xs text-black/40"></i>

                                    <h3 className="text-sm font-semibold">
                                        Products
                                    </h3>
                                </div>


                                <div className="divide-y divide-black/5 rounded-xl border border-black/10">

                                    {order.products.map((product) => (

                                        <div
                                            key={product.id}
                                            className="flex items-center gap-4 p-4"
                                        >

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-16 w-16 rounded-lg object-cover"
                                            />

                                            <div className="min-w-0 flex-1">

                                                <p className="truncate text-sm font-medium">
                                                    {product.name}
                                                </p>

                                                <div className="mt-1 flex flex-wrap gap-3 text-xs text-black/40">
                                                    <span>
                                                        Size: {product.size}
                                                    </span>

                                                    <span>
                                                        Qty: {product.quantity}
                                                    </span>
                                                </div>

                                            </div>

                                            <div className="text-right">
                                                <p className="text-sm font-semibold">
                                                    ₹{(
                                                        product.price *
                                                        product.quantity
                                                    ).toLocaleString('en-IN')}
                                                </p>

                                                <p className="mt-1 text-xs text-black/40">
                                                    ₹{product.price.toLocaleString('en-IN')} each
                                                </p>
                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>


                            {/* Bottom Information */}
                            <div className="mt-7 grid gap-6 lg:grid-cols-2">

                                {/* Payment */}
                                <div>

                                    <div className="mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-credit-card text-xs text-black/40"></i>

                                        <h3 className="text-sm font-semibold">
                                            Payment
                                        </h3>
                                    </div>

                                    <div className="rounded-xl bg-black/[0.025] p-4">

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-black/50">
                                                Method
                                            </span>

                                            <span className="text-sm font-medium">
                                                {order.paymentMethod}
                                            </span>
                                        </div>

                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="text-sm text-black/50">
                                                Status
                                            </span>

                                            <span
                                                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                                                    order.paymentStatus === 'Paid'
                                                        ? 'bg-emerald-50 text-emerald-700'
                                                        : 'bg-amber-50 text-amber-700'
                                                }`}
                                            >
                                                {order.paymentStatus}
                                            </span>
                                        </div>

                                        {order.paymentMethod === 'COD' && (
                                            <div className="mt-3 flex items-center justify-between border-t border-black/5 pt-3">
                                                <span className="text-sm font-medium">
                                                    Cash to Collect
                                                </span>

                                                <span className="text-lg font-semibold">
                                                    ₹{order.totalAmount.toLocaleString('en-IN')}
                                                </span>
                                            </div>
                                        )}

                                    </div>

                                </div>


                                {/* Order Summary */}
                                <div>

                                    <div className="mb-4 flex items-center gap-2">
                                        <i className="fa-solid fa-receipt text-xs text-black/40"></i>

                                        <h3 className="text-sm font-semibold">
                                            Order Summary
                                        </h3>
                                    </div>

                                    <div className="rounded-xl bg-black/[0.025] p-4">

                                        <div className="flex justify-between text-sm">
                                            <span className="text-black/50">
                                                Subtotal
                                            </span>

                                            <span>
                                                ₹{order.subtotal.toLocaleString('en-IN')}
                                            </span>
                                        </div>

                                        <div className="mt-3 flex justify-between text-sm">
                                            <span className="text-black/50">
                                                Delivery
                                            </span>

                                            <span>
                                                ₹{order.deliveryCharge.toLocaleString('en-IN')}
                                            </span>
                                        </div>

                                        <div className="mt-3 flex justify-between text-sm">
                                            <span className="text-black/50">
                                                Discount
                                            </span>

                                            <span>
                                                -₹{order.discount.toLocaleString('en-IN')}
                                            </span>
                                        </div>

                                        <div className="mt-4 flex justify-between border-t border-black/10 pt-4">
                                            <span className="font-semibold">
                                                Total
                                            </span>

                                            <span className="text-lg font-semibold">
                                                ₹{order.totalAmount.toLocaleString('en-IN')}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Delivery Controls */}
                            <div className="mt-7 rounded-xl border border-black/10 bg-black/[0.02] p-4">

                                <div className="mb-4 flex items-center gap-2">
                                    <i className="fa-solid fa-truck text-xs text-black/40"></i>

                                    <h3 className="text-sm font-semibold">
                                        Delivery Controls
                                    </h3>
                                </div>


                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                                    {/* Delivery Status */}
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-black/50">
                                            Delivery Status
                                        </label>

                                        <select
                                            value={order.deliveryStatus}
                                            onChange={(e) =>
                                                updateOrder(
                                                    order.id,
                                                    'deliveryStatus',
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-black/30"
                                        >
                                            {deliveryStatuses.map((status) => (
                                                <option
                                                    key={status}
                                                    value={status}
                                                >
                                                    {status}
                                                </option>
                                            ))}
                                        </select>
                                    </div>


                                    {/* Payment Status */}
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-black/50">
                                            Payment Status
                                        </label>

                                        <select
                                            value={order.paymentStatus}
                                            onChange={(e) =>
                                                updateOrder(
                                                    order.id,
                                                    'paymentStatus',
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-black/30"
                                        >
                                            <option value="Unpaid">
                                                Unpaid
                                            </option>

                                            <option value="Paid">
                                                Paid
                                            </option>
                                        </select>
                                    </div>


                                    {/* Courier */}
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-black/50">
                                            Courier
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="e.g. Delhivery"
                                            value={order.courier}
                                            onChange={(e) =>
                                                updateOrder(
                                                    order.id,
                                                    'courier',
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-black/30"
                                        />
                                    </div>


                                    {/* Tracking */}
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-black/50">
                                            Tracking Number
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Tracking / AWB"
                                            value={order.trackingNumber}
                                            onChange={(e) =>
                                                updateOrder(
                                                    order.id,
                                                    'trackingNumber',
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-black/30"
                                        />
                                    </div>

                                </div>


                                <div className="mt-4 flex justify-end">

                                    <button
                                        type="button"
                                        className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/80"
                                    >
                                        <i className="fa-solid fa-check mr-2 text-xs"></i>
                                        Update Order
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* Empty State */}
            {filteredOrders.length === 0 && (
                <div className="rounded-2xl border border-black/10 bg-white px-6 py-16 text-center">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
                        <i className="fa-solid fa-box-open text-black/30"></i>
                    </div>

                    <h3 className="mt-4 font-medium">
                        No orders found
                    </h3>

                    <p className="mt-1 text-sm text-black/40">
                        Try changing your search or delivery status filter.
                    </p>

                </div>
            )}

        </section>
    )
}

export default Orders