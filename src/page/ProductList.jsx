// main.jsx
import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { getProductList } from '@/src/api/getProductAPI.jsx'

export default function ProductList() {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        // useGetProductsList 함수 호출하여 상품 목록 가져오기
        getProductList()
            .then((data) => {
                setProductList(data)
            })
            .catch((error) => {
                console.error('상품 목록을 불러오는 중 에러 발생:', error)
            })
    }, []) // 컴포넌트가 마운트될 때 한 번만 실행하도록 빈 배열 전달
    console.log(productList)
    return (
        <div>
            <h1>상품 목록</h1>
            <div className="product-list">
                {productList.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <div>
                            <h2>{product.title}</h2>
                            <p>{product.price}</p>
                            {/* 여기에 더 많은 상품 정보를 표시할 수 있습니다. */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
