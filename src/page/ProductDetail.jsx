import React from 'react'
import { getDetailProduct } from './utils/getDetailProduct'
import './ProductDetail.css' // ProductDetail.css 파일을 불러옴

const ProductDetail = ({ productId }) => {
    const detailProduct = getDetailProduct(productId)

    if (!detailProduct) {
        return <div>Loading...</div>
    }

    return (
        <div className="product-detail-container">
            <h1>{detailProduct.title}</h1>
            <img src={detailProduct.image} alt={detailProduct.title} />
            <p>{detailProduct.description}</p>
            <p className="price">Price: ${detailProduct.price}</p> {/* 클래스명을 추가하여 스타일을 적용 */}
        </div>
    )
}

export default ProductDetail
