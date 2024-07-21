import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findindex((item) => item.product.id === product.id)
            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart]
                updatedCart[existingProductIndex].quantity += quantity
                return updatedCart
            } else {
                return [...prevCart, { product, quantity }]
            }
        })
    }

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}
