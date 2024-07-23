import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.find((item) => item.product.id === product.id)
            if (existingProductIndex) {
                return item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            } else {
                return [...prevCart, { product, quantity }]
            }
        })
    }

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}
