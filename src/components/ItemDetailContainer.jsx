import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import {collection, getDocs,getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {


    const [item, setItem] = useState()
    const { id } = useParams()
    

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        const db = getFirestore()
        const itemsCollection = collection(db,"items")
        getDocs(itemsCollection).then((snapshot)=>{

            const item = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
            const itemsuelto = item.find(p=> p.id == id)
            setItem(itemsuelto)
        })
    }



    return (
        <div>
            {item && <ItemDetail key={item.id} item={item} />}
        </div>
    )
}

export default ItemDetailContainer