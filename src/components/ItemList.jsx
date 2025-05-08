import React from 'react'
import { Link } from 'react-router-dom'


const ItemList = ({product}) => {
  return (
      <div className='cards'>
        <div className='card-img'>
          <img src={product.thumbnails} alt=""/>
        </div>
        <div className='card-content'>
          <h1>{product.name}</h1>
          <p className='price'>${product.price}</p>
          <Link to={`/items/${product.id}`} className='button'>Ver Mas</Link>
          
        </div>  
      </div>
  )
}

export default ItemList