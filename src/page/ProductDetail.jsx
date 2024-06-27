import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { getDetailProduct } from './../api/getProductAPI'

const ProductDetail = () => {
    const { productId } = useParams()
    const [detailProduct, setDetailProduct] = useState(null)

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const product = await getDetailProduct(productId)
                setDetailProduct(product)
            } catch (error) {
                console.error('상세 상품 정보를 가져오는 중 에러 발생:', error)
            }
        }

        fetchProductDetail()
    }, [productId])

    if (!detailProduct) {
        return <div>Loading...</div>
    }

    return (
        <div className="product-detail-container">
            <h1>{detailProduct.title}</h1>
            <img src={detailProduct.image} alt={detailProduct.title} />
            <p>{detailProduct.description}</p>
            <p className="price">Price: ${detailProduct.price}</p>
        </div>
    )
}

export default ProductDetail
