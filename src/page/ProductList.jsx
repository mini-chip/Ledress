import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { getProductList } from './../api/getProductAPI'
import { Link } from 'react-router-dom'

export default function ProductList() {
    const [productList, setProductList] = useState([])
    const [sortOrder, setSortOrder] = useState('reviewOrder')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await getProductList()
                setProductList(productList)
            } catch (error) {
                console.error('상품 목록을 가져오는 중 에러 발생:', error)
            }
        }

        fetchProducts()
    }, [])

    const sortedProductList = () => {
        if (sortOrder === 'reviewOrder') {
            return [...productList].sort((a, b) => b.rating.rate - a.rating.rate)
        } else if (sortOrder === 'descendingOrder') {
            return [...productList].sort((a, b) => b.price - a.price)
        }
        return productList
    }

    const handleSelected = (e) => {
        setSortOrder(e.target.value)
    }

    return (
        <div>
            <header>
                <button>장바구니</button>
            </header>
            <h1>상품 목록</h1>
            <label htmlFor="sort">정렬 기준: </label>
            <select id="sort" className="outline-none" value={sortOrder} onChange={handleSelected}>
                <option value="reviewOrder">평점순</option>
                <option value="descendingOrder">높은 가격순</option>
            </select>
            <div className="product-list">
                {sortedProductList().map((product) => (
                    <li key={product.id} className="product-card">
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} alt={product.title} />
                            <div>
                                <h2>{product.title}</h2>
                                <p>가격:{product.price}$</p>
                                <p>평점:{product.rating.rate}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}
