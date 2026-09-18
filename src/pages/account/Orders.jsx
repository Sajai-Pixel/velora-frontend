import React from 'react'

const Orders = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Order History</h2>
                <p className="text-black/50 mt-1">
                    Check the status of recent orders, manage returns, and discover similar products.
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="border border-black/10 rounded-xl overflow-hidden bg-white hover:border-black/20 transition-colors">
                    <div
                        className="bg-black/3 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-black/10"
                    >
                        <div className="flex gap-8">
                            <div>
                                <p className="text-black/50 font-medium mb-0.5">Order Placed</p>
                                <p className="font-semibold">Mar 20, 2025</p>
                            </div>
                            <div>
                                <p className="text-black/50 font-medium mb-0.5">Total</p>
                                <p className="font-semibold">$149.00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className="flex-1">
                                <p className="text-black/50 font-medium mb-0.5">Order Number</p>
                                <p className="font-semibold uppercase truncate">#ORD-892471</p>
                            </div>
                            <a
                                className="shrink-0 px-4 py-2 border border-black/15 bg-white rounded-lg font-medium hover:bg-black/1 transition-colors text-xs whitespace-nowrap"
                                href="/account/orders/ORD-892471"
                            >View Details</a
                            >
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-base font-semibold flex items-center gap-2">
                                Preparing for shipment<span
                                    className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold shrink-0 bg-amber-100 text-amber-700"
                                >Processing</span
                                >
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <a
                                    className="size-20 lg:size-24 rounded-xl bg-black/5 overflow-hidden shrink-0"
                                    href="/products/electronics/smart-fitness-watch"
                                ><img
                                        alt="Smart Fitness Watch"
                                        loading="lazy"
                                        width="96"
                                        height="96"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full h-full object-cover"
                                        src="/images/product-2.png"
                                    /></a>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-medium lg:text-base line-clamp-1">Smart Fitness Watch</p>
                                    <p className="text-black/50 mt-1">Qty: 1 × $199.00</p>
                                    <a
                                        className="text-xs self-start mt-3 font-semibold hover:text-black/60"
                                        href="/products/electronics/smart-fitness-watch"
                                    >View item</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-black/10 rounded-xl overflow-hidden bg-white hover:border-black/20 transition-colors">
                    <div
                        className="bg-black/3 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-black/10"
                    >
                        <div className="flex gap-8">
                            <div>
                                <p className="text-black/50 font-medium mb-0.5">Order Placed</p>
                                <p className="font-semibold">Feb 15, 2025</p>
                            </div>
                            <div>
                                <p className="text-black/50 font-medium mb-0.5">Total</p>
                                <p className="font-semibold">$288.00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className="flex-1">
                                <p className="text-black/50 font-medium mb-0.5">Order Number</p>
                                <p className="font-semibold uppercase truncate">#ORD-759321</p>
                            </div>
                            <a
                                className="shrink-0 px-4 py-2 border border-black/15 bg-white rounded-lg font-medium hover:bg-black/1 transition-colors text-xs whitespace-nowrap"
                                href="/account/orders/ORD-759321"
                            >View Details</a
                            >
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-base font-semibold flex items-center gap-2">
                                Delivered successfully<span
                                    className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold shrink-0 bg-green-100 text-green-700"
                                >Delivered</span
                                >
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <a
                                    className="size-20 lg:size-24 rounded-xl bg-black/5 overflow-hidden shrink-0"
                                    href="/products/electronics/noise-cancelling-headphones"
                                ><img
                                        alt="Noise Cancelling Headphones"
                                        loading="lazy"
                                        width="96"
                                        height="96"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full h-full object-cover"
                                        src="/images/product-8.png"
                                    /></a>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-medium lg:text-base line-clamp-1">Noise Cancelling Headphones</p>
                                    <p className="text-black/50 mt-1">Qty: 1 × $299.00</p>
                                    <a
                                        className="text-xs self-start mt-3 font-semibold hover:text-black/60"
                                        href="/products/electronics/noise-cancelling-headphones"
                                    >View item</a
                                    >
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a
                                    className="size-20 lg:size-24 rounded-xl bg-black/5 overflow-hidden shrink-0"
                                    href="/products/accessories/slim-laptop-messenger-bag"
                                ><img
                                        alt="Slim Laptop Messenger Bag"
                                        loading="lazy"
                                        width="96"
                                        height="96"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full h-full object-cover"
                                        src="/images/product-3.png"
                                    /></a>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-medium lg:text-base line-clamp-1">Slim Laptop Messenger Bag</p>
                                    <p className="text-black/50 mt-1">Qty: 1 × $79.00</p>
                                    <a
                                        className="text-xs self-start mt-3 font-semibold hover:text-black/60"
                                        href="/products/accessories/slim-laptop-messenger-bag"
                                    >View item</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-black/10 rounded-xl overflow-hidden bg-white hover:border-black/20 transition-colors">
                    <div
                        className="bg-black/3 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-black/10"
                    >
                        <div className="flex gap-8">
                            <div>
                                <p className="text-black/50 font-medium mb-0.5">Order Placed</p>
                                <p className="font-semibold">Nov 5, 2024</p>
                            </div>
                            <div>
                                <p className="text-black/50 font-medium mb-0.5">Total</p>
                                <p className="font-semibold">$89.00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className="flex-1">
                                <p className="text-black/50 font-medium mb-0.5">Order Number</p>
                                <p className="font-semibold uppercase truncate">#ORD-621849</p>
                            </div>
                            <a
                                className="shrink-0 px-4 py-2 border border-black/15 bg-white rounded-lg font-medium hover:bg-black/1 transition-colors text-xs whitespace-nowrap"
                                href="/account/orders/ORD-621849"
                            >View Details</a
                            >
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-base font-semibold flex items-center gap-2">
                                On its way<span
                                    className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold shrink-0 bg-blue-100 text-blue-700"
                                >Shipped</span
                                >
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <a
                                    className="size-20 lg:size-24 rounded-xl bg-black/5 overflow-hidden shrink-0"
                                    href="/products/accessories/quilted-chain-handbag"
                                ><img
                                        alt="Quilted Chain Handbag"
                                        loading="lazy"
                                        width="96"
                                        height="96"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full h-full object-cover"
                                        src="/images/product-1.png"
                                    /></a>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-medium lg:text-base line-clamp-1">Quilted Chain Handbag</p>
                                    <p className="text-black/50 mt-1">Qty: 1 × $120.00</p>
                                    <a
                                        className="text-xs self-start mt-3 font-semibold hover:text-black/60"
                                        href="/products/accessories/quilted-chain-handbag"
                                    >View item</a
                                    >
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a
                                    className="size-20 lg:size-24 rounded-xl bg-black/5 overflow-hidden shrink-0"
                                    href="/products/electronics/wireless-game-controller"
                                ><img
                                        alt="Wireless Game Controller"
                                        loading="lazy"
                                        width="96"
                                        height="96"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full h-full object-cover"
                                        src="/images/product-7.png"
                                    /></a>
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="font-medium lg:text-base line-clamp-1">Wireless Game Controller</p>
                                    <p className="text-black/50 mt-1">Qty: 4 × $69.00</p>
                                    <a
                                        className="text-xs self-start mt-3 font-semibold hover:text-black/60"
                                        href="/products/electronics/wireless-game-controller"
                                    >View item</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Orders
