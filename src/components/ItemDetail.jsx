import React, { useContext } from 'react'
import ButtonCount from "./ButtonCount"
import { CartContext } from '../context/cartContext'

const ItemDetail = ({ item }) => {

  const { addToCart } = useContext(CartContext)


  const handleAddToCart = (count) => {
    addToCart(item, count)
  }


  return (
    <div className="container-side-card">
      <img src={item.thumbnails} alt="Album" className="card-image" />
      <div className='content'>
        <h1 className="title">{item.name}</h1>
        <h5 className='price font-bold'>${item.price}</h5>
        <p className="description">{item.description}</p>
        <ButtonCount stock={item.stock} handleAddToCart={handleAddToCart}/>
        
      </div>
    </div>
  )
}

export default ItemDetail