import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './page/ProductList'
import ProductDetail from './page/ProductDetail'
import CartPage from './page/CartPage'
import { CartProvider } from './context/CartContext.jsx'
import './App.css'
import NavBar from './component/NavBar.jsx'
export default function App() {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="products">
                        <Route path=":productId" element={<ProductDetail />} />
                    </Route>
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </CartProvider>
    )
}
