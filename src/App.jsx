// App.jsx 파일

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './page/ProductList'
import './App.css'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
            </Routes>
        </Router>
    )
}
