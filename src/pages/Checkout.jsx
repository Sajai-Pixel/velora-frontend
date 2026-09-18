import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { clearCart } from '../redux/cartSlice'

const Checkout = () => {

    const { user, isAuthenticated } = useAuth()
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState('COD')
    const [showSuccess, setShowSuccess] = useState(false)

    const [toast, setToast] = useState({
        show: false,
        message: ''
    })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    })

    useEffect(() => {
        if (isAuthenticated && user) {
            setFormData(prev => ({
                ...prev,
                name: user.name || '',
                email: user.email || '',
                phone: user.phone || ''
            }))
        }
    }, [isAuthenticated, user])

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    )

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const showError = (message) => {
        setToast({
            show: true,
            message
        })
        setTimeout(() => {
            setToast({
                show: false,
                message: ''
            })
        }, 3000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            /*
                Later your API call will go here.
                Example:
                await createOrder({
                    ...formData,
                    paymentMethod,
                    products: cartItems,
                    totalAmount: totalPrice
                })
            */
            // Dummy success for now
            setShowSuccess(true)
            // Clear cart after successful order
            dispatch(clearCart())
        } catch (error) {
            console.error(error)
            showError(
                error.response?.data?.message ||
                'Something went wrong. Please try again.'
            )
        }
    }

    const handleContinue = () => {
        setShowSuccess(false)
        navigate('/')
    }
    
    if (cartItems.length === 0 && !showSuccess) {
        return (
            <section className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-black/5">
                        <i className="fa-solid fa-cart-shopping text-xl text-black/30"></i>
                    </div>
                    <h1 className="mt-5 text-2xl font-semibold">
                        Your cart is empty
                    </h1>
                    <p className="mt-2 text-sm text-black/50">
                        Add some products before checking out.
                    </p>
                    <button
                        onClick={() => navigate('/products')}
                        className="mt-6 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
                    >
                        Continue Shopping
                    </button>
                </div>
            </section>
        )
    }
    return (
        <>
            {/* Error Toast */}
            {toast.show && (
                <div className="fixed right-5 top-5 z-[100]">
                    <div className="flex items-center gap-3 rounded-xl border border-red-100 bg-white px-4 py-3 shadow-lg">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-50">
                            <i className="fa-solid fa-xmark text-sm text-red-500"></i>
                        </div>
                        <p className="text-sm font-medium text-black/70">
                            {toast.message}
                        </p>
                        <button
                            onClick={() =>
                                setToast({
                                    show: false,
                                    message: ''
                                })
                            }
                            className="ml-2 text-black/30 hover:text-black"
                        >
                            <i className="fa-solid fa-xmark text-xs"></i>
                        </button>
                    </div>
                </div>
            )}
            
            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
                        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-green-50">
                            <i className="fa-solid fa-check text-2xl text-green-600"></i>
                        </div>
                        <h2 className="mt-6 text-2xl font-semibold">
                            Order Placed!
                        </h2>
                        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-black/50">
                            Thank you for your order. We've received your order
                            and will start processing it shortly.
                        </p>
                        <div className="mt-6 rounded-xl bg-black/[0.03] px-4 py-3 text-left">
                            <div className="flex items-center gap-3">
                                <i className="fa-solid fa-truck text-black/40"></i>
                                <div>
                                    <p className="text-sm font-medium">
                                        {paymentMethod === 'COD'
                                            ? 'Cash on Delivery'
                                            : 'Payment Successful'
                                        }
                                    </p>
                                    <p className="mt-1 text-xs text-black/40">
                                        {paymentMethod === 'COD'
                                            ? `Amount to pay: ₹${totalPrice.toLocaleString('en-IN')}`
                                            : 'Your payment has been received.'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleContinue}
                            className="mt-6 w-full rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-black/80"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}
            {/* Checkout */}
            {!showSuccess && (
                <section className="min-h-screen px-6 py-12">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-10">
                            <p className="text-sm font-medium text-black/40">
                                Secure Checkout
                            </p>
                            <h1 className="mt-1 text-4xl font-semibold tracking-tight">
                                Checkout
                            </h1>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-10 lg:grid-cols-3"
                        >
                            {/* Left */}
                            <div className="space-y-6 lg:col-span-2">
                                {/* Contact */}
                                <div className="rounded-2xl border border-black/10 bg-white p-6">
                                    <h2 className="text-lg font-semibold">
                                        Contact Information
                                    </h2>
                                    <p className="mt-1 text-sm text-black/40">
                                        Enter your contact details for order updates.
                                    </p>
                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-black/30"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                required
                                                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-black/30"
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="mb-2 block text-sm font-medium">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-black/30"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="rounded-2xl border border-black/10 bg-white p-6">
                                    <h2 className="text-lg font-semibold">
                                        Delivery Address
                                    </h2>
                                    <p className="mt-1 text-sm text-black/40">
                                        Where should we deliver your order?
                                    </p>
                                    <div className="mt-6 space-y-4">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">
                                                Address
                                            </label>
                                            <textarea
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                placeholder="House number, street, locality"
                                                rows="3"
                                                required
                                                className="w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-black/30"
                                            />
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-3">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    placeholder="Thrissur"
                                                    required
                                                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-black/30"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">
                                                    State
                                                </label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    placeholder="Kerala"
                                                    required
                                                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-black/30"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium">
                                                    Pincode
                                                </label>
                                                <input
                                                    type="text"
                                                    name="pincode"
                                                    value={formData.pincode}
                                                    onChange={handleChange}
                                                    placeholder="680001"
                                                    required
                                                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-black/30"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Payment */}
                                <div className="rounded-2xl border border-black/10 bg-white p-6">
                                    <h2 className="text-lg font-semibold">
                                        Payment Method
                                    </h2>
                                    <div className="mt-5 space-y-3">
                                        {/* COD */}
                                        <label
                                            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${paymentMethod === 'COD'
                                                ? 'border-black bg-black/[0.02]'
                                                : 'border-black/10'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="COD"
                                                    checked={paymentMethod === 'COD'}
                                                    onChange={(e) =>
                                                        setPaymentMethod(e.target.value)
                                                    }
                                                />
                                                <div>
                                                    <p className="text-sm font-medium">
                                                        Cash on Delivery
                                                    </p>
                                                    <p className="mt-1 text-xs text-black/40">
                                                        Pay when your order arrives.
                                                    </p>
                                                </div>
                                            </div>
                                            <i className="fa-solid fa-money-bill text-black/40"></i>
                                        </label>
                                        {/* Stripe */}
                                        <label
                                            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${paymentMethod === 'STRIPE'
                                                ? 'border-black bg-black/[0.02]'
                                                : 'border-black/10'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="STRIPE"
                                                    checked={paymentMethod === 'STRIPE'}
                                                    onChange={(e) =>
                                                        setPaymentMethod(e.target.value)
                                                    }
                                                />
                                                <div>
                                                    <p className="text-sm font-medium">
                                                        Card / Online Payment
                                                    </p>
                                                    <p className="mt-1 text-xs text-black/40">
                                                        Secure payment powered by Stripe.
                                                    </p>
                                                </div>
                                            </div>
                                            <i className="fa-regular fa-credit-card text-black/40"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Right */}
                            <div className="lg:sticky lg:top-24 self-start">
                                <div className="rounded-2xl bg-black/[0.03] p-6">
                                    <h2 className="text-lg font-semibold">
                                        Order Summary
                                    </h2>
                                    <div className="mt-6 space-y-4">
                                        {cartItems.map(item => (
                                            <div
                                                key={item._id}
                                                className="flex gap-3"
                                            >
                                                <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-black/5">
                                                    <img
                                                        src={item.images?.[0]}
                                                        alt={item.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                    <span className="absolute right-1 top-1 rounded-full bg-black px-1.5 py-0.5 text-[10px] text-white">
                                                        {item.quantity}
                                                    </span>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-sm font-medium">
                                                        {item.title}
                                                    </p>
                                                    <p className="mt-1 text-xs text-black/40">
                                                        {item.size}
                                                    </p>
                                                </div>
                                                <p className="text-sm font-medium">
                                                    ₹{(
                                                        item.price *
                                                        item.quantity
                                                    ).toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <hr className="my-6 border-black/10" />
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-black/50">
                                                Subtotal
                                            </span>
                                            <span>
                                                ₹{totalPrice.toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-black/50">
                                                Shipping
                                            </span>
                                            <span className="font-medium text-green-600">
                                                Free
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-5 border-t border-black/10 pt-5">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">
                                                Total
                                            </span>
                                            <span className="text-xl font-semibold">
                                                ₹{totalPrice.toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-black py-3.5 font-semibold text-white transition hover:bg-black/80"
                                    >
                                        {paymentMethod === 'COD'
                                            ? 'Place Order'
                                            : 'Continue to Payment'
                                        }
                                    </button>
                                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-black/40">
                                        <i className="fa-solid fa-lock"></i>
                                        Secure checkout
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            )}
        </>
    )
}
export default Checkout