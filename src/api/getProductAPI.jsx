import axios from 'axios'
import { useEffect, useState } from 'react'
export const getProductList = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data)
        })
    }, [])
}

export const getDetailProduct = (productId) => {
    const [detailProduct, setDetailProduct] = useState(null)

    useEffect(() => {
        const fetchDetailProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
                setDetailProduct(response.data)
            } catch (error) {
                console.error('상세 상품 정보를 가져오는 중 에러 발생:', error)
            }
        }

        fetchDetailProduct()
    }, [productId]) // productId가 변경될 때마다 상품 정보를 다시 가져옴

    return detailProduct
}
