import React, { useContext, useState } from 'react'
import { CartContext} from '../context/cartContext'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom';



const FormCart = () => {


  const { cart, totalPriceCart, cleanCart } = useContext(CartContext)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setTelefono] = useState('');

  const [orderNumber, setOrderNumber] = useState()
  const order = {
    buyer: {
      fullName: `${nombre} ${apellido}`,
      email: email,
      phone: phone,
    },
    items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
    total: totalPriceCart(),
  }
  const handleClick = async () => {
    try {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, order);
      console.log(order)
      const { id } = docRef;
      setOrderNumber(id);
    } catch (error) {
      console.error('Error al agregar el documento:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
  }





  return (
    <div className='pruebas'>
      <h1>Datos de Compra</h1>
      <div className='form-cart'>

        <form onSubmit={handleSubmit} className='form'>
          
          <input type='text' id='nombre' name='nombre' placeholder='Name'  value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type='text' id='apellido' name='apellido' placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <input type="email" value={email}  placeholder='Mail' onChange={(event) => setEmail(event.target.value)}/>
          <input type="tel" value={phone} placeholder='Phone' onChange={(event) => setTelefono(event.target.value)}/>
          <label htmlFor="my-modal" className="my-5 btn btn btn-outline btn-success" onClick={handleClick}>Emitir Compra</label>
        </form>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Todo Listo!!</h3>
          <p className="py-4">Gracias por realizar su compra.<br />Su orden: {orderNumber} ha sido registrada con exito</p>
          <div className="modal-action">
            <Link to='/'><label htmlFor="my-modal" className="btn" onClick={cleanCart}>Volver a Inicio</label></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCart