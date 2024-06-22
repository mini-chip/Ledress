// import { useEffect, useState } from 'react'
// import axios from 'axios'

// export const getProductAPI = () => {
//     const [products, setProducts] = useState([])
//     console.log(products)

//     useEffect(() => {
//         axios
//             .get('https://fakestoreapi.com/products')
//             .then((res) => {
//                 setProducts(res.json)
//             })
//             .catch((err) => {
//                 console.error('상품 목록을 가져오는 중 에러 발생:', err)
//             })
//     }, [])
//     return products
// }

// export const getDetailProduct = (productId) => {
//     const [detailProduct, setDetailProduct] = useState(null)

//     useEffect(() => {
//         const fetchDetailProduct = async () => {
//             try {
//                 const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
//                 setDetailProduct(response.data)
//             } catch (error) {
//                 console.error('상세 상품 정보를 가져오는 중 에러 발생:', error)
//             }
//         }

//         fetchDetailProduct()
//     }, [productId]) // productId가 변경될 때마다 상품 정보를 다시 가져옴

//     return detailProduct
// }

// getProductAPI.js
import axios from 'axios'

export const getProductList = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('상품 목록을 가져오는 중 에러 발생:', error)
        throw error
    }
}

export const getDetailProduct = async (productId) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        console.log(response)
        return response.data
    } catch (error) {
        console.error('상세 상품 정보를 가져오는 중 에러 발생:', error)
        throw error
    }
}
