import React, { useContext } from 'react'
import { CartContext } from './../context/CartContext'
import './CartPage.css'

export default function CartPage() {
    const { cart } = useContext(CartContext)

    const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

    return (
        <div className="cart-page-container">
            <h1>장바구니</h1>
            {cart.length === 0 ? (
                <p>장바구니에 담긴 상품이 없습니다.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.product.id} className="cart-item">
                            <img src={item.product.image} alt={item.product.title} />
                            <div>
                                <h2>{item.product.title}</h2>
                                <p>수량: {item.quantity}</p>
                                <p>가격: ${(item.product.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && <h2 className="total-amount">총 금액: ${totalAmount.toFixed(2)}</h2>}
        </div>
    )
}
