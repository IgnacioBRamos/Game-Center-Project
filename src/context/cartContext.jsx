import React, { useState } from 'react'

const CartContext = React.createContext()


const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])



    const cleanCart = () => setCart([])

    const addToCart = (product, quantity) => {
        if(cart.length == 0){
            setCart([
                ...cart,
                {   
                    ...product,
                    quantity
                }
            ])
            
        }
        else  {
            const findProducts = cart.find(item => item.id == product.id)
            if(!findProducts){
                setCart([
                    ...cart,
                    {   
                        ...product,
                        quantity
                    }
                ])
            }else{
                const filteredProducts = cart.filter(item=> item.id != product.id)
                setCart([
                    ...filteredProducts,
                    {   
                        ...findProducts,
                        quantity: quantity + findProducts.quantity
                    }
                ])
            }
        }
        
    }

    const removeProduct=(id)=> setCart(cart.filter(product=>product.id !== id))
    const totalPriceCart= ()=>{
        return cart.reduce((acum,product)=> acum + product.quantity * product.price,0)
    }
    const totalProductCart = ()=>{
        return cart.reduce((acum,product)=>acum + product.quantity,0)
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                cleanCart,
                addToCart,
                removeProduct,
                totalPriceCart,
                totalProductCart

            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider, CartContext }