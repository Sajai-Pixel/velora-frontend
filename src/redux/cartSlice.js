import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    wishlist: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const product = action.payload

            const quantity = product.quantity || 1

            const existingItem = state.items.find(
                item =>
                    item._id === product._id &&
                    item.size === product.size
            )

            if (existingItem) {
                existingItem.quantity += quantity
            } else {
                state.items.push({
                    ...product,
                    quantity,
                    size: product.size
                })
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                item => item._id !== action.payload
            )
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find(
                item => item._id === action.payload
            )

            if (item) {
                item.quantity += 1
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                item => item._id === action.payload
            )

            if (item && item.quantity > 1) {
                item.quantity -= 1
            }
        },

        clearCart: (state) => {
            state.items = []
        },

        addToWishlist: (state, action) => {
            const product = action.payload

            const existingItem = state.wishlist.find(
                item => item._id === product._id
            )

            if (!existingItem) {
                state.wishlist.push(product)
            }
        },

        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                item => item._id !== action.payload
            )
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist
} = cartSlice.actions

export default cartSlice.reducer