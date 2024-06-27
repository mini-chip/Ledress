import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { getProductList } from './../api/getProductAPI'
import { useNavigate } from 'react-router-dom'

export default function ProductList() {
    const [productList, setProductList] = useState([])
    const navigate = useNavigate()

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

    const handleClickProduct = (productId) => {
        navigate(`/products/${productId}`)
    }

    return (
        <div>
            <h1>상품 목록</h1>
            <div className="product-list">
                {productList.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} onClick={() => handleClickProduct(product.id)} />
                        <div>
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
