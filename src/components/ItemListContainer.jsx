import { useEffect, useState } from 'react'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'
import {collection, getDocs,getFirestore} from "firebase/firestore"




const ItemListContainer = () => {

    const [items,setItems]= useState()
    const {category}= useParams()
     
    useEffect(() => {
        getProducts()
    }, [category])




    const getProducts=()=>{
        const db = getFirestore()
        const itemsCollection = collection(db,"items")
        getDocs(itemsCollection).then((snapshot)=>{
            if(category === undefined){
                setItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))   
            }else{ 
                const item = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))           
                const itemsuelto = item.filter(p=> p.category === category)
                setItems(itemsuelto)
            }
        })
    }

  return (  
    <div className='container-card'>
            { items &&
                items.map(product =><ItemList key={product.id} product={product}/>)
            }
    </div>
  )
}

export default ItemListContainer