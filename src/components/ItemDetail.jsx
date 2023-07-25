import React, { useContext } from 'react'
import ButtonCount from './buttonCount'
import { CartContext } from '../context/cartContext'

const ItemDetail = ({item}) => {

  const {addToCart} = useContext(CartContext)


  const handleAddToCart = (count)=>{
    addToCart(item,count)
  }


  return (
    <div className="container-side-card">
      <div className='side-card'>  
          <img src={item.thumbnails} alt="Album" />
          <div className='content'>
              <h1>{item.name}</h1>
              <div>
                <p>{item.description}</p>
                <ButtonCount stock= {item.stock} handleAddToCart={handleAddToCart}/> 
              </div>
              <h5 className='font-bold'>${item.price}</h5>  
          </div>     
      </div>
    </div>
  )
}

export default ItemDetail