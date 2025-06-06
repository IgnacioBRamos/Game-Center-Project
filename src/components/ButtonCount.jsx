import React, { useState } from 'react'

const ButtonCount = ({stock,handleAddToCart}) => {
    const [count, setCount] = useState(0)

    const clickPlus = () =>{
        
        if (count < stock){
            setCount(count => count + 1)
        }
    }


    const clickMinus = ()=>{       
        if (count >= 1){
            setCount(count=> count - 1)
        }       
    }


  return (
    <div className='button-container'>
        <div className=' pb-4'>
            <button onClick={clickPlus} className='btn btn-xs'>+</button>
            <strong className="mx-3">{count}</strong>
            <button onClick={clickMinus} className='btn btn-xs'>-</button>
        </div>
        <button disabled={ count === 0 || stock <=0 } onClick={()=>handleAddToCart(count)} className='btn button' >Agregar a carrito</button>

    </div>
  )
}

export default ButtonCount