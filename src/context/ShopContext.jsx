import { createContext, useEffect, useState } from "react";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/products`)
                const data = await response.json()

                setProducts(data)
            } catch (error) {
                console.error('Failed to fetch products:', error)
            }
        }

        getProducts()
    }, [])

    // Define the context value object containing the data you want to share
    const value = {
        products
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
