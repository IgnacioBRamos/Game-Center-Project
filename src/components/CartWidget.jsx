import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
const CartWidget = () => {

    const {totalProductCart} = useContext(CartContext)


  return (
    <Link to='/cart' className=" btn btn-ghost btn-circle">
        <div className="indicator ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{totalProductCart()}</span>
        </div>
      </Link>
  )
}

export default CartWidget