import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { getDetailProduct } from './../api/getProductAPI'

const ProductDetail = () => {
    const { productId } = useParams()
    const [detailProduct, setDetailProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
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

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
    }

    if (!detailProduct) {
        return <div>Loading...</div>
    }
    const totalPrice = detailProduct.price * quantity
    const handleCart = () => {}
    return (
        <div className="product-detail-container">
            <h1>{detailProduct.title}</h1>
            <img src={detailProduct.image} alt={detailProduct.title} />
            <p>{detailProduct.description}</p>
            <p className="price">가격: ${detailProduct.price}</p>
            <div className="quantity-control">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            <button onClick={handleCart}>장바구니에 담기</button>
            <p className="total-price">총 가격: ${totalPrice.toFixed(2)}</p>
        </div>
    )
}

export default ProductDetail
