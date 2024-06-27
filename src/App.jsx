// App.jsx 파일

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './page/ProductList'
import './App.css'
import ProductDetail from './page/ProductDetail'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                {/* /*기본 경로를 /products로 리디렉션*/}
                <Route path="/products" element={<ProductList />} />
                <Route path="/:productId" element={<ProductDetail />} />
            </Routes>
        </Router>
    )
}
