import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )

    return (
        <section className='px-auto py-12 min-h-screen'>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-8">Shopping Cart<span className="ml-3 text-lg font-normal text-black/40">({totalItems})</span></h1>
            <div className='mt-10 grid lg:grid-cols-3 gap-10'>
                <div className='lg:col-span-2 flex flex-col gap-4'>
                    {cartItems.map(item => (
                        <div key={item._id} className="flex gap-4 p-4 border border-black/10 rounded-2xl bg-white">
                            <Link className="shrink-0" to={`/products/${item._id}`}>
                                <div className="size-22 bg-black/5 rounded-xl overflow-hidden">
                                    <img alt="Smart Fitness Watch" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="object-cover w-full h-full" src={item?.images[0]} />
                                </div>
                            </Link>
                            <div className="flex-1 flex flex-col gap-2 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <Link className="font-medium text-sm md:text-base leading-tight truncate" to={`/products/${item._id}`}>{item.title}</Link>
                                    <button className="shrink-0 p-1.5 text-black/30 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50" title="Remove"
                                        onClick={() => dispatch(removeFromCart(item._id))}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash" aria-hidden="true"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                    </button>
                                </div>
                                <p className="text-black/40 text-xs capitalize">{item.category}</p>
                                <p className="text-black/40 text-xs capitalize">{item.size}</p>
                                <div className="flex items-center justify-between mt-auto flex-wrap gap-3">
                                    <div className="flex items-center border border-black/10 rounded-lg overflow-hidden w-fit">
                                        <button onClick={() => dispatch(decreaseQuantity(item._id))} aria-label="Decrease quantity" className="p-2.5 hover:bg-black/5 transition-colors disabled:opacity-30" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus" aria-hidden="true"><path d="M5 12h14"></path></svg>
                                        </button>
                                        <span className="px-4 text-sm font-medium select-none min-w-10 text-center">{item.quantity}</span>
                                        <button onClick={() => dispatch(increaseQuantity(item._id))} aria-label="Increase quantity" className="p-2.5 hover:bg-black/5 transition-colors disabled:opacity-30"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-base">{item.price * item.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='lg:sticky lg:top-24 self-start bg-black/3 rounded-2xl p-8 flex flex-col gap-5'>
                    <h2 className="text-lg font-semibold">Order Summary</h2>
                    <div className="flex flex-col gap-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-black/60">Subtotal</span>
                            <span className="font-medium">${totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-black/60">Shipping</span>
                            <span className="text-green-600 font-medium">Free</span>
                        </div>
                        <p className="text-xs text-green-600 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg> Free shipping applied!</p>
                    </div>
                    <hr className="border-black/10" />
                    <div className="flex justify-between font-semibold text-base"><span>Total</span><span>${totalPrice}</span></div>
                    <div className="flex gap-2">
                        <label className="flex-1 flex items-center gap-2 border border-black/15 rounded-lg px-3 py-2.5 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag text-black/40 shrink-0" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                            <input type="text" placeholder="Promo code" className="flex-1 outline-none text-sm placeholder:text-black/40 bg-transparent" value="" />
                        </label>
                        <button disabled="" className="px-4 py-2.5 bg-black text-white rounded-lg text-sm font-medium disabled:opacity-40 hover:bg-black/80 transition-colors">Apply</button>
                    </div>
                    <Link
                        to="/checkout"
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-black text-white rounded-lg font-semibold hover:bg-black/80 transition-colors"
                    >
                        Checkout
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>

                    <div className="flex items-center justify-center gap-2 text-xs text-black/40"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Secure &amp; encrypted checkout</div>
                </div>
            </div>
        </section>
    )
}

export default Cart
