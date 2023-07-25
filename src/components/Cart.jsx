import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext.jsx'
import { Link } from 'react-router-dom'
const Cart = () => {

    const { cart,cleanCart,removeProduct, totalPriceCart } = useContext(CartContext)
  if(cart.length == 0){
    return (
      <div className='empty-cart'> 
        <h2>Tu carrito está vacío.</h2>
        <Link to={"/"}>Volver a la Tienda</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto py-10">
      <table className="table w-full">

        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Unidades</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>

          {cart.map(item =>

            <tr>
              <th className='btn my-10 btn-error btn-outline' onClick={() => { removeProduct(item.id) }}>X</th>
              <th><img src={item.thumbnails} alt="Movie" className='w-20' /></th>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.quantity * item.price}</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total</th>
            <th className='text-base'>${totalPriceCart()}</th>
          </tr>

        </tfoot>
      </table>
      <button onClick={cleanCart} className='btn m-5 btn-error btn-outline'>Vaciar Carrito</button>
      <Link to="/form" className="btn my-5 btn btn-outline btn-success">Ir a finalizar compra</Link>
    </div>
  )
}

export default Cart