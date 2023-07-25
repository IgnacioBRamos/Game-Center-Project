import React from 'react'
import { Link } from 'react-router-dom'


const ItemList = ({product}) => {
  return (
    
      <div className='cards text-center'>    
        <Link to={`/items/${product.id}`} className="card-link">
          <img src={product.thumbnails} alt="" />
          <h1>{product.name}</h1>
          <p className='price'>${product.price}</p>
        </Link>
      </div>
    
  )
}

export default ItemList